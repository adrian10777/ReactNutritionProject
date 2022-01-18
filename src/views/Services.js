import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const Services = props => {

    useEffect(() => {console.log('Service component rendered or rerendered!')});

    // new state variable for the service component
    const [programs, setPrograms] = useState(['1'])


    return (
        //form 1
        <Container>
        <Form>
        <div className='Services'>
            <div className="container mb-5 mt-5">
                <div className="pricing card-deck flex-column flex-md-row mb-3">
                    <div className="card card-pricing popular shadow text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">HOW TO THRIVE ON A VEGAN DIET</span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">
                                <span className="price">
                                </span><span className="h6 text-muted ml-2">/ per month</span>
                            </h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Phase 1: Consultation</li>
                                <li>Phase 2: Introduction To Program/ What Are We Designed To Eat/ What Happens When We Eat What We Should Not?/ How To Deal With Conflicting Studies/ How To Read A Scientific Study</li>
                                <li>Phase 3: Benefits Of A Vegan Diet, Learn About Nuts/seeds, grains, fruits, Legumes, And Others/ Are Meat Alternatives Healthy?</li>
                                <li>Free cancelation</li>
                            </ul>
                            <Button type="button" className="btn btn-outline-secondary mb-3">Order now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Form>
    </Container>
        //Form 1
        //
        //
        )
}

export default Services;