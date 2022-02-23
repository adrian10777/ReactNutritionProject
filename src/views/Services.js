import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Carousel, Form, AccordionCollapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";

const Services = props => {
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
        //form 1
        <>
            <h1 id="servicestitle">Services</h1>

            {
                program ?
                    <>
                        <Container>
                            <Carousel fade={true} className="carousel">
                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-60 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[5].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45"><span
                                                            className="price">{`${program[5].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-bold text-center mb-0" id="serviceprice" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45">$<span
                                                            className="price">110</span><span className="h6 text-muted ml-2">/ per month (10)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-10">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><p><span className="fa fa-check-circle" ></span><b>Phase 1:</b> Consultation</p></li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 2:</b> Introduction To Program/ What Are We Designed To Eat/ What Happens When We Eat What We Should Not?/ How To Deal With Conflicting Studies/ How To Read A Scientific Study</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 3:</b> Benefits Of A Vegan Diet, Learn About Nuts/seeds, grains, fruits, Legumes, And Others/ Are Meat Alternatives Healthy?</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 4:</b> Uncover Myths Of A Vegan Diet And Nutrients Of Concern/ How To Get All Your Needed Macronutrients And Micronutrients/ Food Chemicals And Additives</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 5:</b> Food Combinations To Enhance Your Nutrient Intake/ Vitamin/Mineral Combinations To Increase Absorption, World's healthiest Foods/ How To Save Money</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Phase 6: Gut Microbiome</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Phase 7: Sprouting/ Canning/ Freezing/ Meal Planning/ Fasting/ Food Safety/ Does organic matter? / Recipes</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Phase 8: Why being vegan matters/ W A N T E R S (Eight laws of health), Handouts.</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Your Questions For 1 year</li>                                        <li id="serviceunderline">_______________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[5])}>{`${program[5].program_cost}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col className="servicescol">
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">LEAP Program</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-normal text-center mb-0" data-pricing-value="30" id="serviceprice">Not Available</h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>A Certified LEAP Therapist (CLT) is a critical part of the healthcare delivery team. In fact, they are the only team member that can dramatically improve outcomes in a wide range of chronic health problems such as:</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Irritable bowel syndrome, Crohn’s disease, ulcerative colitis, migraine and other chronic headaches, fibromyalgia, eczema, urticaria, rheumatoid arthritis, PCOS, and a number of other illnesses related to food sensitivities.</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>A CLT receives advanced clinical training in managing adverse food reactions with an emphasis on food sensitivities. CLTs apply that knowledge by using the LEAP protocol – an evidence-based and highly effective eating plan for food sensitivity related health problems. LEAP utilizes the patented Mediator Release blood Test (MRT) to help uncover food and chemical sensitivities, not IgE allergies or IgG immune responses. Going far beyond avoidance or elimination diets, the LEAP Protocol is more practical and suited to the clinical realities of food sensitivities. Therefore, the CLT is able to routinely achieve rapid and dramatic clinical improvements, often when conventional therapies have failed.</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>CLTs play a prominent role in treatment, make a significant positive impact to the health and quality of life of their patients, and relieve a massive burden to the health care system. The work CLTs do is 100% Evidence-Based!</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Have any of those health problems and need help solving them? Click the button down below and schedule a call with me today!</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(null)}>{`${null}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item>


                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[1].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">{`${program[1].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-normal font-weight-bold text-center mb-0" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45" id="serviceprice">$<span
                                                            className="price" id="serviceprice">110</span><span className="h6 text-muted ml-2">/ per month (6)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Lose Weight As A Vegan Program</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Your Questions For 6 months</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[1])}>{`${program[1].program_cost}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[0].program_name}`}</span> If You Want To Save Money And Put In Most (Not All) The Work Yourself Here Are The Programs Available To Do So
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">{`${program[0].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Choose The Following 3</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Thrive On A Vegan Diet</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Lose Weight As A Vegan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Live Longer As A Vegan Program</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[0])}>{`${program[0].program_cost}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[3].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">{`${program[3].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-bold  text-center mb-0" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45" id="serviceprice">$<span
                                                            className="price" id="serviceprice">110</span><span className="h6 text-muted ml-2">/ per month (6)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Phase 2: Longevity Program</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[3])}>{`${program[3].program_cost}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>

                                </Carousel.Item>
                                <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{backgroundColor: "#43ace8"}} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[2].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">{`${program[2].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-bold  text-center mb-0" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45" id="serviceprice">$<span
                                                            className="price" id="serviceprice">110</span><span className="h6 text-muted ml-2">/ per month (4)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[2])}>{`${program[2].program_cost}`}</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </ Carousel>
                        </Container>
                    </>
                    :
                    <p></p>
            }
        </>
    )
}

export default Services;