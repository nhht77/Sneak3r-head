import React, { Component } from 'react';
import { connect } from "react-redux";

import Sidebar from "../Common/Sidebar";
import DefaultButton from "../Common/Button/DefaultButton";


export class Dashboard extends Component {
  
    
  render() {
    const {firstname, lastname, email} = this.props.auth.user;

    return (
        <div className="container">
        <div className="user-container">
        <Sidebar/>
            <div className="user-right-nav">
            <div className="user-info-panel">
                <h1>User information</h1>
                <div>
                    <span>First Name: {firstname}</span>
                    <span>Last Name: {lastname}</span>
                    <span>Email: {email}</span>
                </div>
                <DefaultButton 
                    title="Edit your Info" 
                    to="/user/profile"/>
            </div>

            <div className="user-info-panel">
                <h1>History purchases</h1>
                <div className="user-product-block-wrapper">
                    History
                </div>            
            </div>
            </div>
        </div>
        </div>
        
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard)
