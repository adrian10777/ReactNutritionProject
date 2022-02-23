import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Static/main.css'

const Socialmedia = props => {

    return (
        <div className="container">
            <div className="rowbuttons">
                <div className="col-md-12">
                    <a href="https://www.facebook.com/SDANutrition/" target="_blank" className="btn-social btn-facebook"><i
                        className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/sdanutrition/" target="_blank" className="btn-social btn-instagram"><i
                        className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/sdanutrition/" target="_blank" className="btn-social btn-twitter"><i
                        className="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/channel/UCBssDlMy5dB4id5uis07MyA" target="_blank" className="btn-social btn-youtube"><i
                        className="fa fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/sda-nutrition-a90176218/" target="_blank" className="btn-social btn-linkedin"><i
                        className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )

    }

export default Socialmedia;


