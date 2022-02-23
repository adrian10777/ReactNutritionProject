import React from 'react';
import { useEffect, useContext } from 'react';
import { useDatabase, useUser } from 'reactfire';
import { set, ref } from '@firebase/database';
import { DataContext } from '../context/DataProvider';
import { Container, Row, Col, Button, Carousel, Div, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Static/main.css'


let PaymentConfirmation = props => {
    const db = useDatabase();
    const { userStatus, data: user } = useUser();

    const { confirmNumber } = useContext(DataContext);

    const clearCart = () => {
        // if theres a user, update user cart
        if (user) {
            set(ref(db, `carts/${user.uid}`), {
                total: 0,
                size: 0,
                items: {}
            });
        }

        //mutate state cart
        props.setCart({
            total: 0,
            size: 0,
            items: {}
        })
    };

    useEffect(() => { clearCart() }, []);

    return (
        <Container>
        <Form>
            <div className="cardheight card card-pricing popular shadow text-center px-3 mb-4">
                <Row>
                    <Col>
                        <div className="container">
                            <h1 id="paymentconfirmtitle">Thanks for your payment!</h1>
                            <h4 id="paymentconfirmnumber">Your confirmation number is: {confirmNumber}</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        </Form>
    </Container>

    )
}

export default PaymentConfirmation