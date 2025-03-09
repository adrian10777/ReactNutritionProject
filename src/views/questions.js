import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSFiles/questions.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import image3 from "../Static/images/ABOUTME.jpg"
import image1 from "../Static/images/picture-of-me-nutritionsda.jpg"
import imagebachelors from "../Static/images/bachelors.png"
import imageclt from "../Static/images/clt.png"
import imagendtr from "../Static/images/ndtr.png"

const Questions = props => {


    return (
        <div className='Questions'>
            <Container id="question-container">
            <h1 id = "title1">Questions for How To Thrive On A Vegan Diet:</h1>
            <br />
            <h3 class = 'bold'>What is contained in this program?</h3>
            <ul class="bullets">
                <li>Learn how to discern through the confusion, and about studies. (2 sessions)</li>
                <li>Learn what we are designed to eat. (4 sessions)</li>
                <li>Learn about all the food groups. (6 sessions)</li>
                <li>Dispel myths about the vegan diet. (4 sessions)</li>
                <li>Getting all of the nutrients you need. (6 sessions)</li>
                <li>Food Safety. (1 session)</li>
            </ul>           
            <br />
            <p>* Each session is around an hour.</p> 

            <h3 class = 'bold'>What does the meal plan consist of?</h3>
            <p></p>
            </Container>
        </div>
        )}

export default Questions;