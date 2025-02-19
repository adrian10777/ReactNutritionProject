import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import '../CSSFiles/stripe.css';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import { SyncLoader } from "react-spinners";


const CheckoutForm = props => {
    // access our stripe setup through hooks
    const stripe = useStripe();
    const elements = useElements();

    // access our confirmNumber data context
    const {setConfirmNumber} = useContext(DataContext);

    /* steps we need to happen :
    1. make call to flask app to set up payment intent - we did this in checkout component
    2. User submits payment info form (if stripe is loaded) 
    3. use that form info alongside payment intent to confirm and process payment through stripe
    4. display status of payment (unsubmitted -> processing -> complete -> incomplete)
    5. show confirmation page/clear cart/w.e else u gotta do after payment
    */

    //hooks for control flow/info to display
    const [showPay, setShowPay] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState('');

    //handle pay - > do our api call to stripe and communicate with stripe about payment status after submission (this function will run when form is submittted)
    const handlePay = async (event) => {
        event.preventDefault(); //stop form submission from reloading the page
        setShowPay(false);
        //make stripe api calls to confirm our payment
        const data = await stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        })
        console.log('payment intent received:', data);
        if (data['error']) {
            console.log(data['error']['code']);
            seterrorMessage(data['error']['message']);
            setShowForm('error');
        } else {
            setConfirmNumber(data.paymentIntent.id);
            setShowForm(false);
        }

    }

    //finish our handlePay function and make sure the form and buttons are working as intended (showing confirmation etc.)
    // fix our API call such that it waits for the user cart to finish loading before sending its requests (maybe look at useEffect hook running on user status change?) 
    return (
        <>
            <div className="container" id="bodystripe" id ="stripeform">
                {
                    showForm === true ?
                        <form onSubmit={handlePay}>
                            <PaymentElement id="payment-element" />
                            <button disabled={!showPay || !stripe || !elements} id="submit" className="btn">
                                <span id="button-text">
                                    {showPay ? 'Submit Payment' : 'Processing...'}
                                </span>
                            </button>


                        </form>
                        : showForm === 'error' ?
                            <>
                                <h3>There was an error processing your payment. Please try again.</h3>
                                <h3>{errorMessage}</h3>
                            </>
                            :
                            <Navigate to='/confirmation' replace={true} />


                }
            </div>
        </>
    )
}

export default CheckoutForm; 