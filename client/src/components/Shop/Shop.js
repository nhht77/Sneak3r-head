import React, { Component } from 'react';
import { connect } from "react-redux";

import PageTop from "../Common/PageTop";
import CollapseCheckBox from "../Common/CollapseCheckBox";
import CollapseRadio from "../Common/CollapseRadio";

import { getProductBrand, getProductCondition, getProductToShop } from "../../actions/productAction";
import { prices, sizes } from "../../utils/dummyData";
import  GetMoreCard from '../Common/Card/GetMoreCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTh } from "@fortawesome/free-solid-svg-icons";

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
          Prices:[],
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
      this.props.getProductToShop(skip, this.state.limit, this.state.filters, this.props.products.byShop)
          // .then(this.setState(skip))
          
    }

    handleGrid  = ()  => this.setState({grid: !this.state.grid ? 'grid-bars':'' })

    handlePrice = val => {
      let array = [];
      for (let key in prices) { if(prices[key]._id === parseInt(val, 10)) array = prices[key].array }
      return array;
    }

    onFilter = (filters, category) => {
      const newFilters = {...this.state.filters}
      newFilters[category] = filters;

      if(category === "Prices"){
        let priceValues = this.handlePrice(filters);
        newFilters[category] = priceValues;
        console.log(priceValues);
      }

      this.props.getProductToShop(0, this.state.limit, newFilters);
      this.setState({skip: 0, filters: newFilters}, () => console.log(this.state.filters));
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
                onFilter={filter => this.onFilter(filter, "brand")}/>
              <CollapseCheckBox 
                name="Sizes"
                lists={sizes}
                onFilter={filter => this.onFilter(filter, "Sizes")}/>
              <CollapseRadio 
                name="Prices"
                lists={prices}
                onFilter={filter => this.onFilter(filter, "Prices")}/>
              <CollapseCheckBox 
                name="Conditions"
                lists={this.props.conditions}
                onFilter={filter => this.onFilter(filter, "condition")}/>
            </div>
            <div className="right">
              <div className="shop-options">
                  <div className="shop-grids clear">
                  <div className={`grid-btn ${this.state.grid ? '' : 'active'}`}
                       onClick={this.handleGrid} > <FontAwesomeIcon icon={faTh}/> 
                  </div>
                  <div className={`grid-btn ${!this.state.grid ? '' : 'active'}`}
                       onClick={()=> this.handleGrid()} > <FontAwesomeIcon icon={faBars}/>
                  </div>
                  </div>
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
