import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const Blogs = props => {

    return (
        <div className='blog'>
            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h5>The Addition Of Vegetables In The Human Diet</h5>
                        </Row>
                        <Row>
                            <p>October 19, 2021 / 3 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>After the Fall, humans were also permitted to eat vegetables. The original foods were not as available as they were …</p>
                        </Row>
                        <Row>
                            <Button>
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>

                <Col>
                    <Form>
                        <Row>
                            <h5>What Is The Original Diet For Animals? Pt 2</h5>
                        </Row>
                        <Row>
                            <p>October 13, 2021 / 4 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>*Pictures contain blood* The book of Genesis shows that the earth was originally created perfect. It became cursed when sin entered the …</p>
                        </Row>
                        <Row>
                            <Button>
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>


                <Col>
                    <Form>
                        <Row>
                            <h5>What Is The Original Diet Of Animals</h5>
                        </Row>
                        <Row>
                            <p>October 11, 2021 / 4 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>On my last blog I talked about mans original diet which had no death, but In today’s world, when we …</p>
                        </Row>
                        <Row>
                            <Button>
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Row>
                            <h5>What Is Included In Our Original Diet?</h5>
                        </Row>
                        <Row>
                            <p>October 4, 2021 / 1 minute of reading</p>
                        </Row>
                        <Row>
                            <p>As we read on our last blog called “What Are We Designed To Eat” we learned that our original diet …</p>
                        </Row>
                        <Row>
                            <Button>
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Row>
                            <h5>What Are We Designed To Eat?</h5>
                        </Row>
                        <Row>
                            <p>October 1, 2021 / 2 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>Humans are not biologically made for eating meat. Our teeth are flat and not sharp enough to tear through flesh …</p>
                        </Row>
                        <Row>
                            <Button>
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>


        </div>)
}

export default Blogs;
