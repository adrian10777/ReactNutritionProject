import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSSFiles/footer.css'

const Footer = props => {

    return (
        <div id="page-container">
            <div id="content-wrap">
                <footer id="footer">Copyright © {new Date().getFullYear()} SDA Nutrition</footer>
            </div>
        </div>
    )

}

export default Footer;