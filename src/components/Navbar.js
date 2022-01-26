import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Static/main.css'
import { Container, Row, Col, Button, Carousel, Form, FormControl } from 'react-bootstrap';

const Navbar = props => {

  // useEffect() hook runs its call back function every time the component is rendered or redendered (deafult)
  useEffect(() => { console.log("Navbar component rendered or rerendered") });

  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText" >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link mynavlinks" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mynavlinks" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mynavlinks" to="/about">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mynavlinks" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mynavlinks" to="/freemealplan">Free Meal Plan</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mynavlinks" to="/donate">Donate</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link btn btn-info' to='/cart'><i className="fa fa-shopping-cart"></i> | {`${props.cart.size} | $${props.cart.total}`}</Link>
          </li>
          <li>
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
          </li>
        </ul>
      </div>
    </nav>
          )
    }
 
  export default Navbar;