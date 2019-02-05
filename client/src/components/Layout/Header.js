import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        const {isAuthenticated} = this.props.auth;

        const authLinks = (
            <div className="top">
                <Link to="/">My Cart</Link>
                <Link to="/">My Account</Link>
                <div className="logout-link"
                    onClick={()=> {}}>
                    Log out
                </div>
            </div>
        );
      
        const guestLinks = (
            <div className="top">
                <Link to="/login">Log in</Link>
                <Link to="/register">Register</Link>
            </div>
        );
      

        return (
            <header className="bg-b-light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            Sneak3r Head
                        </div>
                    </div>
                    <div className="right">
                            {isAuthenticated ? authLinks : guestLinks }
                        <div className="bottom">
                            <Link to="/">Home</Link>
                            <Link to="/shop">Shoes</Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {})(Header);