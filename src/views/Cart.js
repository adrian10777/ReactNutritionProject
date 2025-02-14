import React from "react";
import '../CSSFiles/cart.css';
import '../CSSFiles/donate.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import { useContext } from 'react';
import { useDatabase, useUser, useAuth } from 'reactfire';
import { set, ref } from '@firebase/database';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { Link } from 'react-router-dom';
import { DataContext } from "../context/DataProvider";
import { Container, Row, Col, Button, Carousel, Div, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cart = (props) => {
    // access our user and db ->reactfire hooks
    const db = useDatabase();
    const { userStatus, data: user } = useUser();
    const auth = useAuth();
    const { setCheckoutSignIn } = useContext(DataContext);

    const signin = async () => {
        setCheckoutSignIn(true);
        let provider = new GoogleAuthProvider();
        let x = await signInWithPopup(auth, provider);
        return x
    }


    //diff ways to modify cart
    // trash can -> remove all of that player

    // remove all -> clear whole cart
    const clearCart = () => {
        // if theres a user, update user cart
        if (user) {
            set(ref(db, `carts/${user.uid}`), {
                total: 0,
                size: 0,
                items: {}
            });
        }

        //mutate state cart
        props.setCart({
            total: 0,
            size: 0,
            items: {}
        })
    }
    // + button - increase +1, 
    const increaseQuantity = (program) => {
        let mutatingCart = { ...props.cart }
        // increase the size of the cart
        mutatingCart.size++;
        //increase the total in the cart
        mutatingCart.total += Number(program.program_cost.slice(1, program.program_cost.length));
        //change quantity
        mutatingCart.items[program.id].quantity++;
        // update the db with a new cart iff there is a user
        if (user) {
            set(ref(db, `carts/${user.uid}`), mutatingCart);
        }
        // mutate state through setCart
        props.setCart(mutatingCart);
    }

    //opposite for -
    const decreaseQuantity = (program) => {
        let mutatingCart = { ...props.cart };
        // decrease the size of the cart
        mutatingCart.size--;
        //decrease the total in the cart
        mutatingCart.total -= Number(program.program_cost.slice(1, program.program_cost.length));
        //change quantity, if quantity 1 fully remove plaer
        mutatingCart.items[program.id].quantity > 1 ? mutatingCart.items[program.id].quantity-- : delete mutatingCart.items[program.id];
        // update the db with a new cart iff there is a user
        if (user) {
            set(ref(db, `carts/${user.uid}`), mutatingCart)
        }
        // mutate state through setCart
        props.setCart(mutatingCart);
    }

    const removeProgram = (program) => {
        let mutatingCart = { ...props.cart }
        // decrease cart size by quantity of player
        mutatingCart.size -= mutatingCart.items[program.id].quantity;
        // decrease cart total by cost of player * quantity player
        mutatingCart.total -= Number(program.program_cost.slice(1, program.program_cost.length)) * mutatingCart.items[program.id].quantity;
        // remove player from cart and mutate state
        delete mutatingCart.items[program.id];
        // update the db with a new cart iff there is a user
        if (user) {
            set(ref(db, `carts/${user.uid}`), mutatingCart)
        }
        //mutate state
        props.setCart(mutatingCart);
    }

    return (
        <Container>
            <Form>
                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4" id="checkoutcardid">
                    <Row>
                        <Col>
                            <div className="container mt-5 mb-5">
                                <div className="d-flex justify-content-center row">
                                    <div className="col-md-8">
                                        <div className="p-2">
                                            <h2 id="carttitle">Programs to Purchase:</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    { // one of these for each program
                        // map through the values of the props.cart.items object
                        Object.values(props.cart.items).map((item) => {

                            return (
                                <Row>
                                    <Col>
                                        <div key={item.program.id} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{item.program.program_name}</span>
                                                <div className="d-flex flex-row product-desc">
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center qty">
                                                <i className="fa fa-minus text-danger" onClick={() => decreaseQuantity(item.program)}></i>
                                                <h5 className="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
                                                <i className="fa fa-plus text-success" onClick={() => increaseQuantity(item.program)}></i>
                                            </div>
                                            <div>
                                                <h5 className="text-grey">{item.program.program_cost} ea.</h5>
                                            </div>
                                            <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={() => removeProgram(item.program)}></i></div>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    <Row>
                        <Col>
                            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded" >
                                <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total:</span>
                                </div>
                                <div>
                                    <h4 className="text-grey">${props.cart.total}</h4>
                                </div>
                                <div className="d-flex align-items-center"><button className="btn btn-sm btn-danger" onClick={clearCart}>Remove All</button></div>
                            </div>
                            {user ?
                                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><Link to="/checkout" className="btn btn-warning btn-block btn-lg ml-2 pay-button" id="proceedtopay" type="button">Proceed To Pay</Link></div>
                                :
                                <>
                                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><Link to="/checkout" className="btn btn-warning btn-block btn-lg ml-2 pay-button" id="checkoutasguest" type="button">Checkout As Guest</Link></div>
                                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" id="checkoutasguest" type="button" onClick={signin}>Sign-in to checkout</button></div>

                                </>

                            }
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container >
    )
}
export default Cart;
