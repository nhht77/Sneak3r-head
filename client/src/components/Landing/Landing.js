import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "./Slider";
import Promotion from "./Promotion";

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
          This is the homepage
        <Promotion/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.product
})

export default connect(mapStateToProps, { getProductByArrival, getProductBySell })(Landing);
