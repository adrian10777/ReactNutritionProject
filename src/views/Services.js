import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Carousel, Form, AccordionCollapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSFiles/services.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import { SyncLoader } from "react-spinners";
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";




const Services = props => {


    // access our user and db ->reactfire hooks
    const db = useDatabase();
    const { userStatus, data: user } = useUser();

    /* build api call to get programs */
    //makes api call

    // const getProgramData = async () => {
    //     try { 
    //         let response = await axios.get('https://sdanutrition.fly.dev/api/programs')
    //     //if you do not control api or u are preparing this for a production environment 
    //     // you should build error handling into this api cal
    //     //check if u are getting 200 repsonse code and have backup plan if u dont
    //     //because we control this api and are still developing this react app, i am keeping this api call simple
    //     // and ignoring error handling/headers/messages, etc, other stuff u might need in production env
    //     return response.data
    //     } catch (error) {
    //         alert('Error getting services');
    //         setLoading(false);
    //     }
    // } 

    // using api data as a state variable
    //where do u call this?
    //dont start normal fucntion name with 'use' like useProgramData
    //react will assume any function starting with use is a hook and will therefore treat it diff

    //responsible for setting state of programs to be this program data we are going to get
    // const loadProgramData = async () => {
    //     let data = await getProgramData();
    //     console.log(data);
    //     setPrograms(data);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //         loadProgramData();
    // }, []); //empty dependency array ensures this runs once when component mounts

    // new state variable for the service component
    const [loading, setLoading] = useState(true);
    const [program, setPrograms] = useState([]); 


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


// const [servicesPhases, setServicesPhases] = useState({
//         HTTOAVGP1: ``,
// })

// const [servicesPhases2, setServicesPhases2] = useState({
//     HTTOAVGP2: ``,
// })

// const [servicesPhases3, setServicesPhases3] = useState({
//     HTTOAVGP3: ``,
// })

// const [servicesPhases4, setServicesPhases4] = useState({
//     HTTOAVGP4: ``,
// })

// const [servicesPhases5, setServicesPhases5] = useState({
//     HTTOAVGP5: ``,
// })
// const [servicesPhases6, setServicesPhases6] = useState({
//     HTTOAVGP6: ``,
// })
// const [servicesPhases7, setServicesPhases7] = useState({
//     HTTOAVGP7: ``,
// })
// const [servicesPhases8, setServicesPhases8] = useState({
//     HTTOAVGP8: ``,
// })
// const [servicesPhases9, setServicesPhases9] = useState({
//     HTTOAVGP9: ``,
// })
// const [servicesPhases10, setServicesPhases10] = useState({
//     HTTOAVGP10: ``,
// })
// const [servicesPhases11, setServicesPhases11] = useState({
//     HTTOAVGP11: ``,
// })

    // const [buttonClicked1, setButtonClicked1] = useState(false)
    // const [buttonClicked2, setButtonClicked2] = useState(false)
    // const [buttonClicked3, setButtonClicked3] = useState(false)
    // const [buttonClicked4, setButtonClicked4] = useState(false)
    // const [buttonClicked5, setButtonClicked5] = useState(false)
    // const [buttonClicked6, setButtonClicked6] = useState(false)
    // const [buttonClicked7, setButtonClicked7] = useState(false)
    // const [buttonClicked8, setButtonClicked8] = useState(false)
    // const [buttonClicked9, setButtonClicked9] = useState(false)
    // const [buttonClicked10, setButtonClicked10] = useState(false)
    // const [buttonClicked11, setButtonClicked11] = useState(false)

//     const httoavgp = {
//     HTTOAVGP1: {
//         beforeButtonClicked: ``,
//         afterButtonClicked: `Introduction to program, What are we designed to eat, What happens when we eat what we should not, How to deal with conflicting studies, How to read a scientific study`
//     },
//     HTTOAVGP2: {
//         beforeButtonClicked2: ``,
//         afterButtonClicked: `Introduction To Program/ What Are We Designed To Eat/ What Happens When We Eat What We Should Not?/ How To Deal With Conflicting Studies/ How To Read A Scientific Study`
//     }
// }

    // const alertFunction = () => {
    //     alert("Check cart!")
    // }

    // const buttonChange = () => {
    //     setButtonClicked1(prevState => !prevState)
    
    //     if (buttonClicked1){
            
    //         setServicesPhases({
    //             HTTOAVGP1: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases({
    //             HTTOAVGP1: <ul className="servicesbullets">
    //             <li className="bulletpoints">Introduction to program</li>
    //             <li className="bulletpoints">What are we designed to eat</li>
    //             <li className="bulletpoints">What happens when we are not designed to eat</li>
    //             <li className="bulletpoints">How to deal with conflicting studies</li>
    //             <li className="bulletpoints">How to read a scientific study</li>
    //             </ul>
    //         })
    //     }
    // }
    
    // const buttonChange2 = () => {
    //     setButtonClicked2(prevState => !prevState)
    
    //     if (buttonClicked2){
    //         setServicesPhases2({HTTOAVGP2: ``
    //     })
    
    //     }
    //     else {
    //         setServicesPhases2({
    //             HTTOAVGP2: `Introduction To Program/ What Are We Designed To Eat/ What Happens When We Eat What We Should Not?/ How To Deal With Conflicting Studies/ How To Read A Scientific Study`
    //         })
    //     }
    // }
    
    // const buttonChange3 = () => {
    //     setButtonClicked3(prevState => !prevState)
    //     if (buttonClicked3){
    //         setServicesPhases3({
    //             HTTOAVGP3: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases3({
    //             HTTOAVGP3: 
    //             <ul className="servicesbullets">
    //             <li className="bulletpoints">Learn about nuts/seeds, grains, fruits, legumes, and others</li>
    //             <li className="bulletpoints">Are meat alternatives healthy?</li>
    //             </ul>
    //         })
    //     }
    // }
    
    // const buttonChange4 = () => {
    //     setButtonClicked4(prevState => !prevState)
    //     if (buttonClicked4){
    //         setServicesPhases4({
    //             HTTOAVGP4: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases4({
    //             HTTOAVGP4: 
    //             <ul className="servicesbullets">
    //             <li className="bulletpoints">Uncover myths of a vegan diet and nutrients of concern</li>
    //             <li className="bulletpoints">How go get all your needed macronutrients and micronutrients</li>
    //             <li className="bulletpoints">Food chemicals and additives</li>
    //             </ul>
    //     })
    // }
    // }
    
    // const buttonChange5 = () => {
    //     setButtonClicked5(prevState => !prevState)
    //     if (buttonClicked5){
    //         setServicesPhases5({
    //             HTTOAVGP5: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases5({
    //             HTTOAVGP5: 
    //             <ul className="servicesbullets">
    //             <li className="bulletpoints">Food combinations to enhance your nutrient intake</li>
    //             <li className="bulletpoints">Vitamin/mineral combinations to increase absorption</li>
    //             <li className="bulletpoints">World's healthiest foods</li>
    //             <li className="bulletpoints">How to save money</li>
    //             </ul>
    //     })
    //     }
    // }
    
    // const buttonChange6 = () => {
    //     setButtonClicked6(prevState => !prevState)
    //     if (buttonClicked6){
    //         setServicesPhases6({
    //             HTTOAVGP6: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases6({
    //             HTTOAVGP6: 
    //             <ul className="servicesbullets">
    //             <li className="bulletpoints">Gut microbiome</li>
    //             </ul>
    //     })
    //     }
        
    // }
    
    // const buttonChange7 = () => {
    //     setButtonClicked7(prevState => !prevState)
    //     if (buttonClicked7){
    //         setServicesPhases7({
    //             HTTOAVGP7: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases7({
    //             HTTOAVGP7: 
    //             <ul className="servicesbullets">
    //             <li className="bulletpoints">Sprouting/ Canning/ Freezing</li>
    //             <li className="bulletpoints">Meal Planning</li>
    //             <li className="bulletpoints">Fasting</li>
    //             <li className="bulletpoints">Food Safety</li>
    //             <li className="bulletpoints">Does organic matter?</li>
    //             </ul>
    //     })
    //     }
    // }
    
    // const buttonChange8 = () => {
    //     setButtonClicked8(prevState => !prevState)
    //     if (buttonClicked8){
    //         setServicesPhases8({
    //             HTTOAVGP8: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases8({
    //             HTTOAVGP8: `  Why being vegan matters/ W A N T E R S (Eight laws of health), Handouts`
    //         })
    //     }
    // }
    // const buttonChange9 = () => {
    //     setButtonClicked9(prevState => !prevState)
    //     if (buttonClicked9){
    //         setServicesPhases9({
    //             HTTOAVGP9: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases9({
    //             HTTOAVGP9: ` Personalized Meal Plan`
    //         })
    //     }
    // }
    

    // const buttonChange10 = () => {
    //     setButtonClicked10(prevState => !prevState)
    //     if (buttonClicked10){
    //         setServicesPhases10({
    //             HTTOAVGP10: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases10({
    //             HTTOAVGP10: ` 5, 15-30 Minute Follow ups`
    //         })
    //     }
    // }

    // const buttonChange11 = () => {
    //     setButtonClicked11(prevState => !prevState)
    //     if (buttonClicked11){
    //         setServicesPhases11({
    //             HTTOAVGP11: ``
    //         })
    //     }
    //     else {
    //         setServicesPhases11({
    //             HTTOAVGP11: ` Private Group For Your Questions For 1 year`
    //         })
    //     }
    // }

    // elephantsql
    // 1. browser
    // 2. SELECT * FROM program

    // if (loading) {
    //     return   <div style={{ marginTop: '150px' }}>
    //     <SyncLoader size={20} color={"#43ace8"} loading={loading} />
    //   </div>
    // }


    return (
        //form 1
        // <>
        //     {/* <h1 id="servicestitle">Services</h1> */}

        //     {
        //         program ?
        //             <>
                        <Container className="Container-margin">
                            {/* <Carousel fade={true} className="carousel"> */}
                                {/* <Carousel.Item interval={100000000}> */}
                                    {/* <Row className="Row">
                                        <Col>
                                            <Form className="serviceform" id="ex2">
                                                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4" id="ex1">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-60 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[5].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45"><span
                                                            className="price">{`${program[5].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-bold text-center mb-0" id="serviceprice" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45">$<span
                                                            className="price">110</span><span className="h6 text-muted ml-2">/ per month (10)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-10">
                                                        <ul onClick={e => e.preventDefault()} className="list-unstyled mb-4">
                                                            <li ><p><span className="fa fa-check-circle" ></span><b>Phase 1:</b></p> <p> {servicesPhases.HTTOAVGP1}</p></li>
                                                            <button type="button" onClick={buttonChange} className="readmorebutton" id='test' >
                                                                Read {buttonClicked1 ? "Less" : ""}
                                                            </button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 2:</b> {servicesPhases2.HTTOAVGP2}</li>
                                                            <button type='button' onClick={buttonChange2} className="readmorebutton">Read {buttonClicked2 ? 'Less' : ''}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 3:</b> {servicesPhases3.HTTOAVGP3}</li>
                                                            <button type='button' onClick={buttonChange3} className="readmorebutton">Read {buttonClicked3 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 4:</b> {servicesPhases4.HTTOAVGP4}</li>
                                                            <button type='button' onClick={buttonChange4} className="readmorebutton">Read {buttonClicked4 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 5:</b> {servicesPhases5.HTTOAVGP5}</li>
                                                            <button type='button' onClick={buttonChange5} className="readmorebutton">Read {buttonClicked5 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span><b>Phase 6:</b> {servicesPhases6.HTTOAVGP6}</li>
                                                            <button type='button' onClick={buttonChange6} className="readmorebutton">Read {buttonClicked6 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span> <b>Phase 7:</b> {servicesPhases7.HTTOAVGP7}</li>
                                                            <button type='button' onClick={buttonChange7} className="readmorebutton">Read {buttonClicked7 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span> <b>Phase 8:</b> {servicesPhases8.HTTOAVGP8}</li>
                                                            <button type='button' onClick={buttonChange8} className="readmorebutton">Read {buttonClicked8 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span> <b>Phase 9:</b> {servicesPhases9.HTTOAVGP9}</li>
                                                            <button type='button' onClick={buttonChange9} className="readmorebutton">Read {buttonClicked9 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span> <b>Phase 10:</b> {servicesPhases10.HTTOAVGP10}</li>
                                                            <button type='button' onClick={buttonChange10} className="readmorebutton">Read {buttonClicked10 ? "Less" : ""}</button>
                                                            <li id="serviceunderline">_______________________</li>
                                                            <li><span className="fa fa-check-circle" ></span> <b>Phase 11:</b> {servicesPhases11.HTTOAVGP11}</li>
                                                            <button type='button' onClick={buttonChange11} className="readmorebutton">Read {buttonClicked11 ? "Less" : ""}</button>                                        <li id="serviceunderline">_______________________</li>
                                                        </ul>
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[5])} >Buy Now!</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row> */}
                                {/* </Carousel.Item> */}

                                     <Row className="Row">
                                        <Col>
                                            <Form className="serviceform">
                                            <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-60 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">How To Thrive On A Vegan Diet</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45"><span
                                                            className="price">$2000</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-bold text-center mb-0" id="serviceprice" >OR</h6>
                                                        <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45">$<span
                                                            className="price">110</span><span className="h6 text-muted ml-2">/ per month (10)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Thrive On A Vegan diet Program</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Your Questions For 1 Year</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        {/* <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[1])}>Buy Now!</button> */}
                                                        <button onClick={(e) => { e.preventDefault(); window.location.href='https://calendly.com/sdanutrition/15min?month=2022-02'; }} type="submit" id="letstalkbutton" className="btn-btn-primary1">Let's Talk</button>
                                                        {/* if you want to put price back instead of buy now {`${program[1].program_cost}`} */}
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">Your Nutrition Reformation</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">$150</span><span className="h6 text-muted ml-2"></span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>2, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Your Questions For 2 months</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        {/* <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[1])}>Buy Now!</button> */}
                                                        <button onClick={(e) => { e.preventDefault(); window.location.href='https://calendly.com/sdanutrition/15min?month=2022-02'; }} type="submit" id="letstalkbutton" className="btn-btn-primary1">Let's Talk</button>
                                                        {/* if you want to put price back instead of buy now {`${program[1].program_cost}`} */}
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">Nutrition Consultation</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">$75</span><span className="h6 text-muted ml-2"></span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>1, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul>
                                                        {/* <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[1])}>Buy Now!</button> */}
                                                        <button onClick={(e) => { e.preventDefault(); window.location.href='https://calendly.com/sdanutrition/15min?month=2022-02'; }} type="submit" id="letstalkbutton" className="btn-btn-primary1">Let's Talk</button>
                                                        {/* if you want to put price back instead of buy now {`${program[1].program_cost}`} */}
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>


                                {/* <Carousel.Item interval={100000000}> */}
                                    {/* <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[1].program_name}`}</span>
                                                    <div className="bg-transparent card-header pt-4 border-0">
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45"><span
                                                            className="price" id="serviceprice">{`${program[1].program_cost}`}</span><span className="h6 text-muted ml-2"></span></h1>
                                                        <h6 className="h5 font-weight-normal font-weight-bold text-center mb-0" id="or">OR</h6>
                                                        <h1 className="h1 font-weight-bold  text-center mb-0" data-pricing-value="45" id="serviceprice">$<span
                                                            className="price" id="serviceprice">110</span><span className="h6 text-muted ml-2">/ per month (6)</span></h1>
                                                    </div>
                                                    <div className="card-body pt-0">
                                                        <ul className="list-unstyled mb-4">
                                                            <li><span className="fa fa-check-circle" ></span>Consultation</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>How To Lose Weight As A Vegan Program</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                                            <li id="serviceunderline">___________________</li>
                                                            <li><span className="fa fa-check-circle" ></span>Private Group For Your Questions For 6 months</li>
                                                            <li id="serviceunderline">___________________</li>
                                                        </ul> */}
                                                        {/* <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[1])}>Buy Now!</button> */}
                                                        {/* <button onClick={(e) => { e.preventDefault(); window.location.href='https://calendly.com/sdanutrition/15min?month=2022-02'; }} type="submit" id="letstalkbutton" className="btn-btn-primary1">Let's Talk</button> */}
                                                        {/* if you want to put price back instead of buy now {`${program[1].program_cost}`} */}
                                                    {/* </div>
                                                </div> */}
                                            {/* </Form>
                                        </Col>
                                    </Row> */}
                                {/* </Carousel.Item> */}


                
                                {/* <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col className="servicescol">
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">LEAP Program</span>
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
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(null)}>Not Available!</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item> */}


                                {/* <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[0].program_name}`}</span> If You Want To Save Money And Put In Most (Not All) The Work Yourself Here Are The Programs Available To Do So
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
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[0])}>Buy Now!</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item> */}

                                {/* <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[3].program_name}`}</span>
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
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[3])}>Buy Now!</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item> */}

                                {/* <Carousel.Item interval={100000000}>
                                    <Row>
                                        <Col>
                                            <Form className="serviceform">
                                                <div className="cardheight card card-pricing popular shadow text-center px-5 mb-4">
                                                    <span style={{ backgroundColor: "#43ace8" }} className="h5 w-80 mx-auto px-5 py-2 rounded-bottom text-white shadow-sm" id="servicestitle">{`${program[2].program_name}`}</span>
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
                                                        <button type="button" className="btn btn-btn-primary1 mb-3" onClick={() => addToCart(program[2])}>Buy Now!</button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Carousel.Item> */}
                                
                            {/* </ Carousel> */}
                        </Container>
        //             </>
        //             :
        //             <p></p>
        //     }
        // </>
    )
}



export default Services;

