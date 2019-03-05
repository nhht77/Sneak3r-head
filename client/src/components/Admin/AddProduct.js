import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Sidebar from "../Common/Sidebar";
import TextFieldGroup from "../Common/TextFieldGroup";
import SelectListGroup from "../Common/SelectListGroup";
import UploadFile from "../Common/UploadFile";

import { getProductBrand, getProductCondition, addProduct } from "../../actions/productAction";

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            description:"",
            price:'',
            condition:"",
            brand:"",
            available:"",
            shipping:"",
            colors:"",
            sizes:"",
            img:[],
            errors:{}
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const newProduct = {
            name:this.state.name,
            description:this.state.description,
            price:this.state.price,
            condition:this.state.condition,
            brand:this.state.brand,
            available:this.state.available,
            shipping:this.state.shipping,
            colors:this.state.colors,
            sizes:this.state.sizes,
        }

        console.log(newProduct);
        this.props.addProduct(newProduct, this.props.history)
        this.setState({
            name:"", description:"", price:null, condition:"", brand:"",
            available:null, shipping:null, colors:"", sizes:"", img:"", errors:{} 
        })
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    componentDidMount = () => {
      this.props.getProductBrand();
      this.props.getProductCondition();
    }
    
  render() {

      const {errors, conditions, brands} = this.props;

    return (
        <div className="container">
        <div className="user-container">
        <Sidebar/>
            <div className="user-right-nav">
            <div style={{paddingTop:"2rem"}}>
            
            <h1>Add product</h1>
            <form onSubmit={this.onSubmit}>

                <UploadFile/>
                
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
                    options={[{_id:1, name:true}, {_id:2, name:false}]}
                    onChange={this.onChange}
                    error = {errors.available}/>
                
                <SelectListGroup 
                    label="Shipping"
                    name="shipping"
                    value={this.state.shipping}
                    options={[{_id:1, name:true}, {_id:2, name:false}]}
                    onChange={this.onChange}
                    error = {errors.shipping}/>

                <div className="form-devider"></div>

                <TextFieldGroup 
                    label="Colors"
                    name="colors"
                    value={this.state.colors}
                    onChange={this.onChange}
                    type="text"
                    error = {errors.colors}/>
                    
                <TextFieldGroup 
                    label="Sizes"
                    name="sizes"
                    value={this.state.sizes}
                    onChange={this.onChange}
                    type="text"
                    error = {errors.sizes}/>

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

export default connect(mapStatetoProps, { getProductBrand, getProductCondition, addProduct })(withRouter(AddProduct));
