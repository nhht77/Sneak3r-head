import React, { Component } from 'react';
import { connect } from "react-redux";
import PageTop from "../Common/PageTop";

import { getProductBrand, getProductCondition } from "../../actions/productAction";

class Shop extends Component {

    componentDidMount = () => {
      this.props.getProductBrand();
      this.props.getProductCondition();
    }
    
    
  render() {
    return (
      <div>
        <PageTop title="Browse Product"/>
        <div className="container">
            <div className="shop-wrapper">
            <div className="left">

            </div>
            <div className="right">

            </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    product: state.product,
    brand: state.brand,
    condition: state.condition
})

export default connect(mapStateToProps, {getProductBrand, getProductCondition})(Shop)
