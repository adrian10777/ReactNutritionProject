import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const Donate = props => {


    return (
        <div className='donate'>
            <Container>
                <Row>
                <h1 className="Hometitle">Donate Here</h1>
                </Row>
                <Row>
                    <p>If you would like to donate to help support my ministry to spread the health message to the world just click the button down below. I also take prayers and support by sharing with your friends and family!</p>
                </Row>
                <Row>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                    Radios
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="first radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="second radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="third radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </div>)
}

export default Donate;