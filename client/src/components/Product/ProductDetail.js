import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProductById } from "../../actions/productAction";

class ProductDetail extends Component {
    
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getProductById(id);
    }

    render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null, { getProductById })(ProductDetail);
