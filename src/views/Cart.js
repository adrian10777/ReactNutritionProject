import React from "react";
import '../Static/cart.css';
import '../css/customCartStyles.css';
import { useContext } from 'react';
import { useDatabase, useUser, useAuth } from 'reactfire';
import { set, ref } from '@firebase/database';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';


const Cart = (props) => {
    
    return(
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Programs to Purchase:</h4>
                    </div>
                    { // one of these for each item
                        // map through the values of the props.cart.items object
                        Object.values(props.cart.items).map((item) => {

                                <div key={item.program.id} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                    <div className="mr-1"><img className="rounded" alt={item.program.first_name} src={item.program.image} width="70" /></div>
                                    <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{item.program.first_name} {item.program.last_name}</span>
                                        <div className="d-flex flex-row product-desc">
                                            <div className="size mr-1"><span className="font-weight-bold">&nbsp;{item.program.number} | {item.program.postion}</span></div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center qty">
                                        <i className="fa fa-minus text-danger" onClick={() => decreaseQuantity(item.program)}></i>
                                        <h5 className="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
                                        <i className="fa fa-plus text-success" onClick={() => increaseQuantity(item.program)}></i>
                                    </div>
                                    <div>
                                        <h5 className="text-grey">{item.program.transfer_cost} ea.</h5>
                                    </div>
                                    <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={() => removePlayer(item.program)}></i></div>
                                </div>
                        })
                    }
                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total:</span>
                        </div>
                        <div>
                            <h4 className="text-grey">${props.cart.total}</h4>
                        </div>
                        <div className="d-flex align-items-center"><button className="btn btn-sm btn-danger" onClick={clearCart}>Remove All</button></div>
                    </div>
                    {user ?
                        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><Link to="/checkout" className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</Link></div>
                        :
                        <>
                            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><Link to="/checkout" className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Checkout as guest</Link></div>
                            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button" onClick={signin}>Sign-in to checkout</button></div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;
