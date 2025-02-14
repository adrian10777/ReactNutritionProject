import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Static/images/new-full-logo-shaded.png';
import logo2 from '../Static/images/logo3.png';
import { Container, Row, Col, Button, Carousel, Form, } from 'react-bootstrap';
import '../CSSFiles/home.css';

const Logo = props => {
    console.log(logo);
    return(
        <Container>
                <Row>
                    <Col>
                        <img id="logo" src={logo} alt='Logo'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img id="logo2" src={logo2} alt='Logo'/>
                    </Col>
                </Row>
        </Container>    
        )
    
}

export default Logo;
