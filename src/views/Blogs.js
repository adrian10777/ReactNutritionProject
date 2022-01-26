import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const Blogs = props => {

    return (
        <div className='blog'>
            <Row>
                <h1 id="blogmaintitle">My Blogs</h1>
            </Row>
            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h3 id="blogtitle">The Addition Of Vegetables In The Human Diet</h3>
                        </Row>
                        <Row>
                            <p id="timeblog">October 19, 2021 / 3 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>After the Fall, humans were also permitted to eat vegetables. The original foods were not as available as they were …</p>
                        </Row>
                        <Row>
                            <Button id="blogbuttons" >
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>

            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h3 id="blogtitle">What Is The Original Diet For Animals? Pt 2</h3>
                        </Row>
                        <Row>
                            <p id="timeblog">October 13, 2021 / 4 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>*Pictures contain blood* The book of Genesis shows that the earth was originally created perfect. It became cursed when sin entered the …</p>
                        </Row>
                        <Row>
                            <Button id="blogbuttons">
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>


            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h3 id="blogtitle2">What Is The Original Diet Of Animals</h3>
                        </Row>
                        <Row>
                            <p id="timeblog">October 11, 2021 / 4 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>On my last blog I talked about mans original diet which had no death, but In today’s world, when we …</p>
                        </Row>
                        <Row>
                            <Button id="blogbuttons">
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>

            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h3 id="blogtitle3">What Is Included In Our Original Diet?</h3>
                        </Row>
                        <Row>
                            <p id="timeblog">October 4, 2021 / 1 minute of reading</p>
                        </Row>
                        <Row>
                            <p>As we read on our last blog called “What Are We Designed To Eat” we learned that our original diet …</p>
                        </Row>
                        <Row>
                            <Button id="blogbuttons">
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>

            <Container>
                <Col>
                    <Form>
                        <Row>
                            <h3 id="blogtitle4">What Are We Designed To Eat?</h3>
                        </Row>
                        <Row>
                            <p id="timeblog">October 1, 2021 / 2 minutes of reading</p>
                        </Row>
                        <Row>
                            <p>Humans are not biologically made for eating meat. Our teeth are flat and not sharp enough to tear through flesh …</p>
                        </Row>
                        <Row>
                            <Button id="blogbuttons">
                                Read More »
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Container>
        </div>)
}

export default Blogs;
