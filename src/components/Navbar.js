import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">SDA Nutrition</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            </ul>
            <span className="navbar-text">
            Navbar text with an inline element
            </span>
        </div>
        </nav>
    )
}

export default Navbar;
