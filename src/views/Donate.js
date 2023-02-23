import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'
import axios from "axios";
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";
import { Navigate } from "react-router-dom";

const Donate = props => {

    const [donate, setDonate] = useState(0);

    function addMoney() {
        if(donate >= 1){
            alert(`You are going to donate $${donate}, are you sure you want to continue?`)

            
        }
        else {
            alert(`You must enter a value greater than 0 to continue`)
        }
    }


    return (
        <>
            {
                <><h1>Choose how much you would like to donate</h1>
        <input donate={donate} onChange={(e) => setDonate(e.target.value)}></input>
                    <Form onClick={(e) => e.preventDefault()}>

                        <Button onClick={addMoney}>Enter</Button>
                       
                    </Form>
                    <><p>You have selected ${donate} to donate</p></>
                </>
            }
        </>
    )
}
export default Donate;