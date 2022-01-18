import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'

const FreeMealPlan = props => {

    // new state variable for the shop component
    const [vegan_meals, setVegan_meals] = useState(['Vegan Meals']);

    // function to run when 'Go somewhere' button is clicked 
    const modifyvegan_meals = () => {
        let newVegan_meals = [...vegan_meals];
        newVegan_meals.splice(0, 1);
        newVegan_meals.push(vegan_meals[0]);
        setVegan_meals(newVegan_meals);
    }

    useEffect(() => { console.log("Shop component rendered or rerendered") });

    return (
        <div className='shop'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <h1>This will be the shop.</h1>
                </div>
                <div className='row justify-content-center'>
                    {
                        vegan_meals.map((vegan_meal, index) => {
                            return <div key={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{vegan_meal}</h5>
                                    <p className="cardName-text">Here are some vegan meal examples!</p>
                                    <button className="btn btn-primary" onClick={modifyvegan_meals}>Go Somewhere</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
};

export default FreeMealPlan;