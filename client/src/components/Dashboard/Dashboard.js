import React, { Component } from 'react';
import Sidebar from "../Common/Sidebar";

export class Dashboard extends Component {
  
    
  render() {
    return (
        <Sidebar>
        <div className="user-info-panel">
            <h1>User information</h1>
            <div>
                <span>Name</span>
                <span>Lastname</span>
                <span>Email</span>
            </div>
        </div>

        <div className="user-info-panel">
            <h1>History purchases</h1>
            <div className="user-product-block-wrapper">
                History
            </div>            
        </div>
        </Sidebar>
    );
  }
}

export default Dashboard
