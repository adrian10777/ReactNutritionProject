import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../Static/main.css'

const Navbar = props => {

    // useEffect() hook runs its call back function every time the component is rendered or redendered (deafult)
    useEffect(() => {console.log("Navbar component rendered or rerendered")});

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/freemealplan">Free Meal Plan</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/donate">Donate</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;
