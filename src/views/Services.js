import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const Services = props => {

    useEffect(() => { console.log('Service component rendered or rerendered!') });

     // new state variable for the service component
      const [programs, setPrograms] = useState(() => loadServiceData());
  
      //add to cart function
      const addToCart = (program) => {
          // access the current cart state {props.cart} and make a copy that we can mutate
            let mutatingCart ={...props.cart}
  
          // increase the size of the cart
          mutatingCart.size++;
  
          //increase the total in the cart
          mutatingCart.total += Number(service.transfer_cost.slice(1, service.transfer_cost.length-1));
          //check if the program is already in the cart
  
  
          //if so change quantity
  
  
          //if not, add player to cart with quantity one
          if (mutatingCart.items[service.id]){
              mutatingCart.items[service.id].quantity++;
          } else {
              mutatingCart.items[service.id] ={
                  'service': service,
                  'quantity': 1
              }
          }
          // mutate state through setCart
          props.setCart(mutatingCart);
      }

    return (
        //form 1
        <>
            <h1 id="servicestitle">Services</h1>
            <Row>
                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">HOW TO THRIVE ON A VEGAN DIET</span>
                                <div className="bg-transparent card-header pt-4 border-0">
                                <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45">$<span
                                        className="price">1000</span><span className="h6 text-muted ml-2"></span></h1>
                                        <h6 className="h5 font-weight-bold text-center mb-0" id="serviceprice" id="or">OR</h6>
                                    <h1 className="h1 font-weight-bold text-center mb-0" id="serviceprice" data-pricing-value="45">$<span
                                        className="price">110</span><span className="h6 text-muted ml-2">/ per month (10)</span></h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><p><span class="fa fa-check-circle" ></span>Phase 1: Consultation</p></li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 2: Introduction To Program/ What Are We Designed To Eat/ What Happens When We Eat What We Should Not?/ How To Deal With Conflicting Studies/ How To Read A Scientific Study</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 3: Benefits Of A Vegan Diet, Learn About Nuts/seeds, grains, fruits, Legumes, And Others/ Are Meat Alternatives Healthy?</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 4: Uncover Myths Of A Vegan Diet And Nutrients Of Concern/ How To Get All Your Needed Macronutrients And Micronutrients/ Food Chemicals And Additives</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 5: Food Combinations To Enhance Your Nutrient Intake/ Vitamin/Mineral Combinations To Increase Absorption, World's healthiest Foods/ How To Save Money</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 6: Gut Microbiome</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 7: Sprouting/ Canning/ Freezing/ Meal Planning/ Fasting/ Food Safety/ Does organic matter? / Recipes</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 8: Why being vegan matters/ W A N T E R S (Eight laws of health), Handouts.</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Private Group For Your Questions For 1 year</li>                                        <li id="serviceunderline">_______________________</li>
                                    </ul> 
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">LEAP PROGRAM</span>
                                <div className="bg-transparent card-header pt-4 border-0">
                                    <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30" id="serviceprice">Not Available </h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><span class="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>A Certified LEAP Therapist (CLT) is a critical part of the healthcare delivery team. In fact, they are the only team member that can dramatically improve outcomes in a wide range of chronic health problems such as:</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Irritable bowel syndrome, Crohn’s disease, ulcerative colitis, migraine and other chronic headaches, fibromyalgia, eczema, urticaria, rheumatoid arthritis, PCOS, and a number of other illnesses related to food sensitivities.</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>A CLT receives advanced clinical training in managing adverse food reactions with an emphasis on food sensitivities. CLTs apply that knowledge by using the LEAP protocol – an evidence-based and highly effective eating plan for food sensitivity related health problems. LEAP utilizes the patented Mediator Release blood Test (MRT) to help uncover food and chemical sensitivities, not IgE allergies or IgG immune responses. Going far beyond avoidance or elimination diets, the LEAP Protocol is more practical and suited to the clinical realities of food sensitivities. Therefore, the CLT is able to routinely achieve rapid and dramatic clinical improvements, often when conventional therapies have failed.</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>CLTs play a prominent role in treatment, make a significant positive impact to the health and quality of life of their patients, and relieve a massive burden to the health care system. The work CLTs do is 100% Evidence-Based!</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Have any of those health problems and need help solving them? Click the button down below and schedule a call with me today!</li>
                                        <li id="serviceunderline">_______________________</li>
                                    </ul>
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">HOW TO LOSE WEIGHT AS A VEGAN</span>
                                <div className="bg-transparent card-header pt-4 border-0">
                                <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">600</span><span className="h6 text-muted ml-2"></span></h1>
                                        <h6 className="h5 font-weight-normal text-primary text-center mb-0" id="or">OR</h6>
                                    <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">110</span><span className="h6 text-muted ml-2">/ per month (6)</span></h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><span class="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>How To Lose Weight As A Vegan Program</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>5, 15-30 Minute Follow ups</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Private Group For Your Questions For 6 months</li>
                                        <li id="serviceunderline">_______________________</li>
                                    </ul>
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>
            </Row>

            <Row>

                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">DO IT YOURSELF</span> If You Want To Save Money And Put In Most (Not All) The Work Yourself Here Are The Programs Available To Do So
                                <div className="bg-transparent card-header pt-4 border-0">
                                <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">300</span><span className="h6 text-muted ml-2"></span></h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><span class="fa fa-check-circle" ></span>Choose The Following 3</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>How To Thrive On A Vegan Diet</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>How To Lose Weight As A Vegan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>How To Live Longer As A Vegan Program</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                        <li id="serviceunderline">_______________________</li>
                                    </ul>
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">HOW TO LIVE LONGER AS A VEGAN PROGRAM</span>
                                <div className="bg-transparent card-header pt-4 border-0">
                                <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">600</span><span className="h6 text-muted ml-2"></span></h1>
                                        <h6 className="h5 font-weight-normal text-primary text-center mb-0" id="or">OR</h6>
                                    <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">110</span><span className="h6 text-muted ml-2">/ per month (6)</span></h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><span class="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Phase 2: Longevity Program</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                        <li id="serviceunderline">_______________________</li>
                                    </ul>
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>


                <Col>
                    <Container>
                        <Form>
                            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm" id="servicestitle">YOUR NUTRITION REFORMATION</span>
                                <div className="bg-transparent card-header pt-4 border-0">
                                <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">400</span><span className="h6 text-muted ml-2"></span></h1>
                                        <h6 className="h5 font-weight-normal text-primary text-center mb-0" id="or">OR</h6>
                                    <h1 className="h1 font-weight-bold text-primary text-center mb-0" data-pricing-value="45">$<span
                                        className="price">110</span><span className="h6 text-muted ml-2">/ per month (4)</span></h1>
                                </div>
                                <div className="card-body pt-0">
                                    <ul className="list-unstyled mb-4">
                                        <li><span class="fa fa-check-circle" ></span>Phase 1: Consultation</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>5, 15-30 Minute Follow Ups</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Personalized Meal Plan</li>
                                        <li id="serviceunderline">_______________________</li>
                                        <li><span class="fa fa-check-circle" ></span>Private Group For Questions 6-12 Months (Depending On Program)</li>
                                        <li id="serviceunderline">_______________________</li>
                                    </ul>
                                    <button type="button" className="btn btn-btn-primary1 mb-3">Order now</button>
                                </div>
                            </div>
                        </Form>
                    </Container>
                </Col>

            </Row>

        </>
    )
}

export default Services;