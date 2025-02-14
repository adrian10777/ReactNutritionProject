import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSFiles/about.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import image3 from "../Static/images/ABOUTME.jpg"
import image1 from "../Static/images/picture-of-me-nutritionsda.jpg"
import imagebachelors from "../Static/images/bachelors.png"
import imageclt from "../Static/images/clt.png"
import imagendtr from "../Static/images/ndtr.png"

const About = props => {


    return (
        <div className='About'>
            <Container>
                <Row>
                    <Col>
                        {/* <img id="picaboutme" src={image3} alt="aboutmepicture"></img> */}
                        <img id="picaboutme" src={image1} alt="aboutmepicture" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id="aboutp1"> Hi! My name is Adrian Henriquez, and I’m passionate about helping others transition to a vegan diet so they can become their best selves. Switching to a vegan lifestyle can often help prevent or even heal many of today’s prevalent diseases. However, with so much misinformation out there, you may feel overwhelmed or unsure of where to begin. I understand—because I’ve been there myself. My own transition was a bumpy road, but through dedication and experience, I’ve discovered the best ways to transition successfully and maintain long-term success. If you’re ready to go vegan and transform your health, I’m here to make the process smooth and sustainable. I can’t wait to work with you—see you on the other side!</p>
                    </Col>
                </Row>
                <Row>
                    <h1 id="title3">MY CREDENTIALS</h1>
                </Row>
                <Row>
                    <Col>
                        <img src={imagebachelors} id="bachelors" alt="bachelorslogo"></img>
                    </Col>
                    <Col>
                        <img src={imageclt} id="clt" alt="CLT"></img>
                    </Col>
                    <Col>
                     <img src={imagendtr} id="ndtr" alt="NDTR"></img>
                    </Col>
                </Row>
                
            </Container>
        </div>
        )}

export default About;