import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'
import image3 from "../Static/images/ABOUTME.jpg"
import imagebachelors from "../Static/images/bachelors.png"
import imageclt from "../Static/images/clt.png"
import imagendtr from "../Static/images/ndtr.png"

const About = props => {


    return (
        <div className='About'>
            <Container>
                <Row>
                    <Col>
                    <h1 id="aboutmetitle">ABOUT ME</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img id="picaboutme" src={image3} alt="aboutmepicture"></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id="aboutp1"> Hi! my name is Adrian Henriquez, and I am passionate about helping others transition to a vegan diet to help them be their best self. Often, transitioning to a vegan diet can help you prevent or heal from many of the diseases prevalent today. You may have noticed that there is a lot of misinformation surrounding this lifestyle, or you may just not know where to even begin which can make the transitioning phase very intimidating. I know this because I made the transition myself. It was quite a bumpy road, but I have dedicated myself into finding the best way to transition successfully and preserve that success! If you are interested in becoming vegan to become your best self I make this transition, go smoothly. I can’t wait to work with you. See you on the other side!</p>
                    </Col>
                </Row>
                <Row>
                    <h1 id="title3">MY CREDENTIALS</h1>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.credly.com/earner/earned/badge/b89508fb-8b1b-4d85-973e-5e7cc7fdc716"><img src={imagebachelors} id="bachelors" alt="bachelorslogo"></img></a>
                        <p>Click Logo!</p>
                    </Col>
                    <Col>
                        <a href="https://www.nowleap.com/"><img src={imageclt} id="clt" alt="CLT"></img></a>
                        <p>Click Logo!</p>
                    </Col>
                    <Col>
                        <a href="https://www.credly.com/earner/earned/badge/f43ef009-9db9-40f1-8013-712254ac1abb"><img src={imagendtr} id="ndtr" alt="NDTR"></img></a>
                        <p>Click Logo!</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
        )}

export default About;