import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from 'reactfire';


const stripePromise = loadStripe("pk_test_51IGkSeHbQnOpUAjFUZCEoUl2Rv2Ntg86fTDrhsrJrqlmoLO3g8aJ0E71aVrcc7yIT3fyu4WAm7bMcoIoNCYTGk8c00jP6fFl53");

const Checkout = props => {
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
    const { userStatus, data: user } = useUser();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        let udata = 'guest';
        if (user){
          udata = user;
        }
        fetch("https://sdanutrition.fly.dev/payments/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([props.cart, udata]), // modify body to have my cart -> and user?
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [props.cart]);
    
      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
    

    return (
        <>
            { clientSecret && (
            <Elements options={options} stripe={stripePromise}>
            <CheckoutForm cart={props.cart} setCart={props.setCart}/>
            </Elements>
            )}
        </>
    )
}

export default Checkout;