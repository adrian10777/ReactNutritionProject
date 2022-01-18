import React, { useEffect } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {image1} from "../Static/images/picture-of-me-nutritionsda.jpg"
import '../Static/main.css'

function Home(props) {
    // data, properties (props), state -> all things that we can use/control over the course of our component's lifestyle
    // component lifestyle: loaded? rendered (shown on screen)? changed state? re-rendered?
    // props.setFoods(['Different Foods']); # bad -> causes infinite rerenders outside of an event/function
    // you cant just use setstudents wherever -> let's put it in a function tied to some event 
    let addFoods = () => {
        // addFoods is a function made to mutate the foods state -> it will make some modification to our students state array
        //then it will use setstudents to mutate that stae
        // out of place modify the state, then use setState to update and rerender
        let newFoods = [...props.foods]; // spread operator ... to make a copy of props.foods
        newFoods.push("Blackberries");
        props.setFoods(newFoods); // UPDATE STATE AND CAUSE A RERENDER
    };

    // useEffect() hook causes its callback function to run every time the component renders
    useEffect(() => {
        console.log(`Rendered or rerendered Home! Number of foods: ${props.foods.length}.`);
    });

    return (
        <div className='home'>
            <Container>
                <Row>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Col>
                        <div>
                            <h5 className="title1"><b>YOUR NUTRITION REFORMATION</b></h5>
                        </div>
                        <div>
                            <p id="p1">
                                Hey! My name is Adrian Henriquez, I am the founder of SDA Nutrition, a Registered Dietetic Technician, and a Certified LEAP Therapist. My goal is to assist you in achieving your optimal lifestyle, and reforming your health by utilizing the best proven method which is to be on a Whole Foods vegan diet, so you can thrive!
                            </p>
                            <button type="submit" className="btn-btn-primary1">Let's Talk</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 id="p2">Are you exhausted with all the confusion? Are you tired of being sick and lethargic? not sure what to eat to be your best self? Your answers are a click away!</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 id="title2">DONT WANT TO WAIT?</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i className="fa fa-hand-o-down"></i>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Services</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Col>
                        <img to={image1} alt="picture of Adrian" />
                    </Col>
                    <Row>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>);
}
export default Home;
