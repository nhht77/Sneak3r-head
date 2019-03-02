import React, { Component } from 'react';
import Sidebar from "../Common/Sidebar";

class AddProduct extends Component {
  

    onSubmit = () => {
        console.log("Submit")
    }
    
  render() {
    return (
        <div className="container">
        <div className="user-container">
        <Sidebar/>
            <div className="user-right-nav">
            <div style={{paddingTop:"2rem"}}>
            
            <h1>Add product</h1>
            <form onSubmit={this.onSubmit}>
            
            </form>

            </div>
            </div>
        </div>
        </div>

    )
  }
}

export default AddProduct
