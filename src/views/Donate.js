import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'
import axios from "axios";
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";

const Donate = props => {
        // access our user and db ->reactfire hooks
        const db = useDatabase();
        const { userStatus, data: user } = useUser();
    
        /* build api call to get programs */
        //makes api call
        const getProgramData = async () => {
            let response = await axios.get('https://sdanutrition.herokuapp.com/api/programs')
            //if you do not control api or u are preparing this for a production environment 
            // you should build error handling into this api cal
            //check if u are getting 200 repsonse code and have backup plan if u dont
            //because we control this api and are still developing this react app, i am keeping this api call simple
            // and ignoring error handling/headers/messages, etc, other stuff u might need in production env
            return response.data
        }
    
        // using api data as a state variable
        //where do u call this?
        //dont start normal fucntion name with 'use' like useProgramData
        //react will assume any function starting with use is a hook and will therefore treat it diff
    
        //responsible for setting state of programs to be this program data we are going to get
        const loadProgramData = async () => {
            let data = await getProgramData();
            console.log(data);
            setPrograms(data);
        }
    
    
        //useEffect(() => { console.log('Service component rendered or rerendered!') });
    
        // new state variable for the service component
        const [program, setPrograms] = useState(() => { loadProgramData() });
    
    
        //add to cart function
        const addToCart = (program) => {
            // access the current cart state {props.cart} and make a copy that we can mutate
            let mutatingCart = { ...props.cart }
    
            // increase the size of the cart
            mutatingCart.size++;
            //increase the total in the cart
            mutatingCart.total += Number(program.program_cost.slice(1, program.program_cost.length));
            //check if the program is already in the cart
            //if so change quantity
            //if not, add program to cart with quantity one
            if (mutatingCart.items[program.id]) {
                mutatingCart.items[program.id].quantity++;
            } else {
                mutatingCart.items[program.id] = {
                    'program': program,
                    'quantity': 1
                }
            }
            // update the db with a new cart iff there is a user
            if (user) {
                set(ref(db, `carts/${user.uid}`), mutatingCart)
            }
    
            // mutate state through setCart
            props.setCart(mutatingCart);
        }

    return (
        <>
            {
                program ?
                    <>
            <Container>
                    <Row>
                        <Col>
                            <Form id="donateform">
                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[4].program_name}`}</span>

                                    <div className="card-body pt-0">
                                        <ul className="list-unstyled mb-4">
                                            <li><p>If you would like to donate to help support my ministry to spread the health message to the world just click the button down below. I also take prayers and support by sharing with your friends and family!</p></li>
                                        </ul>
                                        <button type="button" id="Donatebutton" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[4])}>{`${program[4].program_cost}`}<p id="donatebuttonname">Donate</p></button>
                                    </div>
                                </div>
                            </Form>
                        </Col>
                    </Row>
            </Container>
            </>
                    :
                    <p></p>
            }
        </>
    )
}
            export default Donate;