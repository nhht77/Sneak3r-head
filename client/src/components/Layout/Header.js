import React, { Component } from 'react';

class Header extends Component {


    render() {
        return (
            <header className="bg-b-light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            Sneak3r Head
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            Top
                        </div>
                        <div className="bottom">
                            Bottom
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;