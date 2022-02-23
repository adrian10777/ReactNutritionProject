import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Static/main.css'
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useAuth, useUser, useSigninCheck } from 'reactfire';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { DataContext } from '../context/DataProvider';
import { useContext } from 'react';
import SearchBar from '../projectparts/SearchBar';
import '../../src/CSSFiles/SearchBar.css';

const Navbar_ = props => {
  // enable our navbar component to use our auth system
  const auth = useAuth();
  const {setCheckoutSignIn} = useContext(DataContext);

  // useEffect() hook runs its call back function every time the component is rendered or redendered (deafult)
  //useEffect(() => { console.log("Navbar component rendered or rerendered") });

  // use the useUser hook and useSign in check hooks to set up the user and usersignedin states
  const { data: user } = useUser();
  const { signinStatus } = useSigninCheck();

  // check the db for this users cart on sign in


  const signin = async () => {
    let provider = new GoogleAuthProvider();
    let x = await signInWithPopup(auth, provider);
    return x
  }

  const signout = async () => {
    await signOut(auth).then(() => console.log('Signed out user'));
  }



  return (


    <Container>
      <Row>
        <Col id='signinout'>
          <div>
            <Link className='nav-link' id="shopbutton" to={props.cart.size ? '/cart' : '/shop'}><i className="fa fa-shopping-cart"></i> | {props.cart.size ? `${props.cart.size} | $${props.cart.total}` : 'Empty'}</Link>
            {
              signinStatus === 'loading' ?
                <button className='nav-link btn btn-info' id="signinsignout" >Fetching User information</button>
                :
                user ?
                  <>
                    <button className='nav-link' id="signinsignout" onClick={signout}>Sign-out</button>
                  </>
                  :
                  <button className='nav-link' id="signinsignout" onClick={signin}>Sign-in</button>
            }
          </div>
        </Col>
      </Row>



      <Navbar id="navbartoggle" expand={false}>
  <Container fluid>
    <Navbar.Toggle id="togglenav" aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          {/* <Nav.Link href="/freemealplan">Free Meal Plan</Nav.Link> */}
          <Nav.Link href="/donate">Donate</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>







      <Row>
        <Col id="inlinenav">
          <Link className="nav-link mynavlinks" to="/">Home</Link>
          <Link className="nav-link mynavlinks" to="/services">Services</Link>
          <Link className="nav-link mynavlinks" to="/about">About Me</Link>
          <Link className="nav-link mynavlinks" to="/blogs">Blogs</Link>
          {/* <Link className="nav-link mynavlinks" to="/freemealplan">Free Meal Plan</Link> */}
          <Link className="nav-link mynavlinks" to="/donate">Donate</Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <SearchBar placeholder="Search..." />
        </Col>
      </Row>

    </Container >
  )
}
export default Navbar_;