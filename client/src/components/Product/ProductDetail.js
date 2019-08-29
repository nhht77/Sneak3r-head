import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProductById } from "../../actions/productAction";
import Spinner from "../Common/Spinner";

import PageTop from "../Common/PageTop";
import ProductImg from "./ProductImg";
import ProductSpecs from "./ProductSpecs";

class ProductDetail extends Component {
    
    componentDidMount(){ this.props.getProductById(this.props.match.params.id); }

    render() {
    return (
      <div>
      <PageTop title="Product detail"/>
      <div className="container">
      {
          this.props.product.byId 
          ?  
          <div className="product-detail-wrapper">
            <div className="left">
              <div style={{width:'500px'}}>
                <ProductImg
                    detail={this.props.product.byId}
                />
            </div>
            </div>
            <div className="right">
                <ProductSpecs
                  addToCart={(id)=> this.addToCartHandler(id)}
                  detail={this.props.product.byId}/>
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
