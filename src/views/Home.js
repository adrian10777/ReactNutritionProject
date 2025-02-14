import React, { useEffect } from "react";
import { useUser } from 'reactfire';
import { Container, Row, Col, Button, Carousel, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../Static/images/picture-of-me-nutritionsda.jpg"
import image2 from "../Static/images/new-website-benefits-frame-1-e1628729923231.png"
import '../CSSFiles/home.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import '../projectparts/CarouselContainer'
import ContactForm from '../components/HomeForm'
import CarouselContainer from "../projectparts/CarouselContainer";
import HomeForm from "../components/HomeForm";



function Home(props) {
    // data, properties (props), state -> all things that we can use/control over the course of our component's lifestyle
    // component lifestyle: loaded? rendered (shown on screen)? changed state? re-rendered?
    // props.setFoods(['Different Foods']); # bad -> causes infinite rerenders outside of an event/function
    // you cant just use setstudents wherever -> let's put it in a function tied to some event 

    /* // useEffect() hook causes its callback function to run every time the component renders
    useEffect(() => {
        console.log(`Rendered or rerendered Home! Number of foods: ${props.foods.length}.`);
    }); */

    //useUser hook to gain access to our current user
    const { userStatus, data: user } = useUser();

    return (
        <div className='home'>
            <Container>
                {/* <Row>
                    {user ? <h1 className="Hometitle"> Welcome, {user.displayName}!</h1> : <h1 className="Hometitle">Home</h1>}
                </Row> */}
                <Row>
                    <Col>
                        {/* <img id="picmehomepage" src={image1} alt="picture of Adrian" /> */}
                        <div>
                            <h4 className="title1"><b>HOW TO THRIVE ON A VEGAN DIET</b></h4>
                        </div>
                        <div>
                            <p id="p1">
                            Hey! My name is Adrian Henriquez. I am the founder of SDA Nutrition, a Registered Dietetic Technician, and a Certified LEAP Therapist. My goal is to assist you in achieving your optimal lifestyle and transforming your health by utilizing the best proven method—following a whole foods, plant-based (vegan) diet—so you can thrive!
                            </p>
                            <button onClick={(e) => { e.preventDefault(); window.location.href='https://calendly.com/sdanutrition/15min?month=2022-02'; }} type="submit" id="letstalkbutton" className="btn-btn-primary1">Let's Talk</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 id="p2">Are you exhausted by all the confusion? Tired of feeling sick and sluggish? Unsure of what to eat to become your best self? Your answers are just a click away!</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 id="title2">DONT WANT TO WAIT?</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i className="fa fa-hand-o-down" ></i>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={(e) => { e.preventDefault(); window.location.href='https://sda-nutrition.web.app/services'; }} type="submit" id="homeservicesbutton">Services</button>
                    </Col>
                </Row>

                <Row>
                    <Col id="colbenefits">
                        <CarouselContainer id="carouselcontainer"/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <HomeForm />
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row> */}
                
                {/* <Row>
                    <Form id="form1home">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h1 id="homeformtitle">Contact Me</h1>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="username" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastname" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Message</Form.Label>
                            <div className="form-group"> <label className="sr-only">Message</label> <textarea className="form-control" required="" rows="7" placeholder="Write Message"></textarea> </div>
                        </Form.Group>
                        <Button to="https://getform.io/f/d9fea594-49af-4689-a62c-5307e684fb51" id="submitform" method="POST" variant="primary" type="submit">Submit</Button>
                    </Form>
                </Row> */}

            </Container>
        </div >);
}
export default Home;
