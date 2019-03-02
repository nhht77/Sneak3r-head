import React, { Component } from 'react';
import { connect } from "react-redux";
import Sidebar from "../Common/Sidebar";
import TextFieldGroup from "../Common/TextFieldGroup";
import SelectListGroup from "../Common/SelectListGroup";

import { getProductBrand, getProductCondition } from "../../actions/productAction";
import isEmpty from "../../utils/is-empty";

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            description:"",
            price:null,
            condition:"",
            brand:"",
            available:null,
            shipping:null,
            colors:[],
            sizes:[],
            img:"",
            errors:{}
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    componentDidMount = () => {
      this.props.getProductBrand();
      this.props.getProductCondition();
      !isEmpty(this.props.conditions) ? console.log(this.props.conditions) : console.log("There is no conditions yet!");
      !isEmpty(this.props.brands) ? console.log(this.props.brands) : console.log("There is no brands yet!");
    }
    
    
  render() {

      const {errors, conditions, brands} = this.props;
    //   let condition = !isEmpty(conditions) ? condition = conditions : condition = null;
    //   let brand = !isEmpty(brands) ? brand = brands : brand = null;

    return (
        <div className="container">
        <div className="user-container">
        <Sidebar/>
            <div className="user-right-nav">
            <div style={{paddingTop:"2rem"}}>
            
            <h1>Add product</h1>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    type="text"
                    error = {errors.name}/>
                <TextFieldGroup 
                    label="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    type="text"
                    error = {errors.description}/>
                <TextFieldGroup 
                    label="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    type="text"
                    error = {errors.price}/>

                <div className="form-devider"></div>
                
                <SelectListGroup 
                    label="Brand"
                    name="brand"
                    value={this.state.brand}
                    options={brands}
                    onChange={this.onChange}
                    error = {errors.brand}/>
                    
                <SelectListGroup 
                    label="Condition"
                    name="condition"
                    value={this.state.condition}
                    options={conditions}
                    onChange={this.onChange}
                    error = {errors.condition}/>

                <SelectListGroup 
                    label="Available"
                    name="available"
                    value={this.state.available}
                    options={[true, false]}
                    onChange={this.onChange}
                    error = {errors.available}/>
                
                <SelectListGroup 
                    label="Shipping"
                    name="shipping"
                    value={this.state.shipping}
                    options={[true, false]}
                    onChange={this.onChange}
                    error = {errors.shipping}/>


                <button>Add Product</button>
            </form>

            </div>
            </div>
        </div>
        </div>

    )
  }
}

const mapStatetoProps = state => ({
    errors: state.errors,
    brands: state.brand,
    conditions: state.condition
})

export default connect(mapStatetoProps, { getProductBrand, getProductCondition })(AddProduct);
