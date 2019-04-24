import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProductById } from "../../actions/productAction";
import Spinner from "../Common/Spinner";

import PageTop from "../Common/PageTop";

class ProductDetail extends Component {
    
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getProductById(id);
    }

    render() {
        console.log(this.props.product.byId)
    return (
      <div>
      <PageTop title="Product detail"/>
      <div className="container">
      {
          this.props.product.byId 
          ?  
          <div className="product-detail-wrapper">
            <div className="left">
                <h1>This is product detail {this.props.product.name}</h1>
            </div>
            <div className="right">
          
            </div>
          </div>
          : <Spinner/>

      }
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ product: state.product})

export default connect(mapStateToProps, { getProductById })(ProductDetail);
