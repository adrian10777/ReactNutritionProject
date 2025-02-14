import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Div, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSFiles/blogs.css'
import '../CSSFiles/header.css'
import '../CSSFiles/footer.css'
import '../CSSFiles/socialmedia.css'
import '../views/ComingSoonBlog'

const Blogs = props => {

    return (
        <Container className = "cardBlogs">
            {/* <Row>
                <Col>
                    <div className='blog'>
                        <h1 id="blogmaintitle">Blogs</h1>
                    </div>
                </Col>
            </Row> */}
{/* 
            <Form>
                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                    <Row>
                        <Col>
                            <h3 id="blogtitle">The Addition Of Vegetables In The Human Diet</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                             <p id="timeblog">October 19, 2021 / 3 minutes of reading</p> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>After the Fall, humans were also permitted to eat vegetables. The original foods were not as available as they were …</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button id="blogbuttons" href="https://sda-nutrition.web.app/ComingSoonBlog">
                                Read More »
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>

            <Form>
                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                    <Row>
                        <Col>
                            <h3 id="blogtitle">What Is The Original Diet For Animals? Pt 2</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                             <p id="timeblog">October 13, 2021 / 4 minutes of reading</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>*Pictures contain blood* The book of Genesis shows that the earth was originally created perfect. It became cursed when sin entered the …</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button id="blogbuttons" href="https://sda-nutrition.web.app/ComingSoonBlog"> 
                                Read More »
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>


            <Form>
                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                    <Row>
                        <Col>
                            <h3 id="blogtitle2">What Is The Original Diet Of Animals</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                             <p id="timeblog">October 11, 2021 / 4 minutes of reading</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>On my last blog I talked about mans original diet which had no death, but In today’s world, when we …</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button id="blogbuttons" href="https://sda-nutrition.web.app/ComingSoonBlog">
                                Read More »
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>
*/}

            <Form>
                <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                    <Row>
                        <Col>
                            <h3 id="blogtitle3">What Is Included In Our Original Diet?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <p id="timeblog">October 4, 2021 / 1 minute of reading</p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>As we read on our last blog called “What Are We Designed To Eat” we learned that our original diet …</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button id="blogbuttons" href="https://sda-nutrition.web.app/ComingSoonBlog">
                                Read More »
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>

            <Form>
            <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                <Row>
                    <Col>
                        <h3 id="blogtitle4">What Are We Designed To Eat?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id="timeblog">February 2, 2025 / 2 minutes of reading</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Humans are not biologically made for eating meat. Our teeth are flat and not sharp enough to tear through flesh …</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="blogbuttons" href='https://sda-nutrition.web.app/blog1'>
                            Read More »
                        </Button>
                        {/* <Button id="blogbuttons" href='http://localhost:3000/blog1'>
                            Read More »
                        </Button> */}
                    </Col>
                </Row>
                </div>
            </Form>

        </Container>
    )
}

export default Blogs;
