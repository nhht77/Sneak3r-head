import React, { Component } from 'react';
import { connect } from "react-redux";

import PageTop from "../Common/PageTop";
import CollapseCheckBox from "../Common/CollapseCheckBox";
import CollapseRadio from "../Common/CollapseRadio";

import { getProductBrand, getProductCondition } from "../../actions/productAction";
import { price, sizes } from "../../utils/dummyData";


class Shop extends Component {

    componentDidMount = () => {
      this.props.getProductBrand();
      this.props.getProductCondition();
      console.log(this.props.conditions);
    }
    
    
  render() {
    return (
      <div>
        <PageTop title="Browse Product"/>
        <div className="container">
            <div className="shop-wrapper">
            <div className="left">
              <CollapseCheckBox 
                name="Brands"
                lists={this.props.brands}
                onFilter={() => {}}/>
              <CollapseCheckBox 
                name="Size"
                lists={sizes}
                onFilter={() => {}}/>
              <CollapseRadio 
                name="Prices"
                lists={price}
                onFilter={() => {}}/>
              <CollapseCheckBox 
                name="Conditions"
                lists={this.props.conditions}
                onFilter={() => {}}/>
            </div>
            <div className="right">
                Right
            </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product,
  brands: state.brand,
  conditions: state.condition
})

export default connect(mapStateToProps, {getProductBrand, getProductCondition})(Shop)
