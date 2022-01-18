import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Static/main.css'

const Socialmedia = props => {

    return (
        <div className="container">
            <div className="rowbuttons">
                <div className="col-md-12">
                    <a href="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-facebook"><i
                        className="fa fa-facebook"></i></a>
                    <a href="http://scripteNameden.com/download/eden-ui/" target="_blank" className="btn-social btn-instagram"><i
                        className="fa fa-instagram"></i></a>
                    <a href="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-twitter"><i
                        className="fa fa-twitter"></i></a>
                    <a href="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-youtube"><i
                        className="fa fa-youtube"></i></a>
                    <a href="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-linkedin"><i
                        className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )

    }

export default Socialmedia;


