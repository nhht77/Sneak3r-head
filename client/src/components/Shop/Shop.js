import React, { Component } from 'react';
import { connect } from "react-redux";

import PageTop from "../Common/PageTop";
import CollapseCheckBox from "../Common/CollapseCheckBox";
import CollapseRadio from "../Common/CollapseRadio";

import { getProductBrand, getProductCondition, getProductToShop } from "../../actions/productAction";
import { price, sizes } from "../../utils/dummyData";
import  GetMoreCard from '../Common/Card/GetMoreCard';


class Shop extends Component {
  
    constructor(){
      super();
      this.state={
        grid:'',
        limit:6,
        skip:0,
        filters:{
          Brands:[],
          Sizes:[],
          Prizes:[],
          Conditions:[]
        }
      }
    }

    componentDidMount = () => {
      this.props.getProductBrand();
      this.props.getProductCondition();
      this.props.getProductToShop(this.state.skip, this.state.limit, this.state.filters);
    }
    
    getMoreItems = () => {
      let skip = this.state.skip + this.state.limit;
      this.props.getProductToShop(skip, this.state.limit, this.state.filters);
      this.setState({skip});
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
                name="Sizes"
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
              <div className="shop-options">
                  <div className="shop-grids clear">grids</div>
              </div>
              <div>
                <GetMoreCard
                  grid={this.state.grid}
                  limit={this.state.limit}
                  size={this.props.products.bySize}
                  products={this.props.products.byShop}
                  getMoreItems={this.getMoreItems}/>
              </div>
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

export default connect(mapStateToProps, {getProductBrand, getProductCondition, getProductToShop})(Shop)
