import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "./Slider";
import Promotion from "./Promotion";
import CardGroup from "../Common/Card/CardGroup";

import {getProductByArrival, getProductBySell} from '../../actions/productAction';

export class Landing extends Component {

  componentDidMount = () => {
    this.props.getProductByArrival();
    this.props.getProductBySell();
  }
  

  render() {
    return (
      <div>
        <Slider/>
        <CardGroup
          title="Best Selling Sneaker"
          products={this.props.products.bySell}
        />
        <Promotion/>
        <CardGroup
          title="New Arrival"
          products={this.props.products.byArrival}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product
})

export default connect(mapStateToProps, { getProductByArrival, getProductBySell })(Landing);
