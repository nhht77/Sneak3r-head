import React, { Component } from 'react';
import Sidebar from "../Common/Sidebar";
import DefaultButton from "../Common/Button/DefaultButton";


export class Dashboard extends Component {
  
    
  render() {
    return (
        <div className="container">
        <div className="user-container">
        <Sidebar/>
            <div className="user-right-nav">
            <div className="user-info-panel">
                <h1>User information</h1>
                <div>
                    <span>Name</span>
                    <span>Lastname</span>
                    <span>Email</span>
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

export default Dashboard
