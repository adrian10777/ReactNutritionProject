import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Static/images/new-full-logo-shaded.png';
import '../Static/main.css';

const Logo = props => {
    console.log(logo);
    return(
        <img src={logo} alt='Logo'/>
    )
    
}

export default Logo;
