import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export class Footer extends Component {
  render() {

        return (
            <footer className="bg-b-dark">
                <div className="container">
                    <div className="logo">
                        Sneak3r  Head
                    </div>
                    <div className="wrapper">
                        <div className="left">
                            <h2>Contact information</h2>
                            <div className="business-info">
                                <div className="tag">
                                <FontAwesomeIcon icon={faCompass} className="icon"/>
                                    <div className="info">
                                        <div>Address</div>
                                        <div>34 Kajanninkatu, Oulu</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <div className="info">
                                        <div>Phone</div>
                                        <div>+358 469 460 018</div>
                                    </div>
                                </div>
                                <div className="tag">
                                <FontAwesomeIcon icon={faClock} className="icon"/>
                                    <div className="info">
                                        <div>Working hours</div>
                                        <div>10am - 8pm</div>
                                    </div>
                                </div>
                                <div className="tag">
                                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                    <div className="info">
                                        <div>Email</div>
                                        <div>Sneak3rTrung@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="right">
                            <h2>Be the first to know</h2>
                            <div>
                                <div>
                                Get all the latest information on events, sales and offers.You can miss out.
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </footer>
        );
    };
}

    
export default Footer
