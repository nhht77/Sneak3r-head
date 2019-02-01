import React, { Component } from 'react'

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
                                    Tag Compass
                                    <div className="info">
                                        <div>Address</div>
                                        <div>Address Info</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    Tag Phone
                                    <div className="info">
                                        <div>Phone</div>
                                        <div>Phone number</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    Tag Clock
                                    <div className="info">
                                        <div>Working hours</div>
                                        <div>Working Hours Info</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    Tag Envelope Email
                                    <div className="info">
                                        <div>Email</div>
                                        <div>Email Info</div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="left">
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
