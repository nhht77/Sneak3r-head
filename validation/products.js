const Validator = require('validator'); 
const isEmpty   = require('./is-empty');

module.exports = function validateProductInput(data){
    let errors = {};

    let testData = {...data};

    // Check if price is number then price transfer to be string 
    if(!isNaN(data.price)){
        data.price = JSON.stringify(data.price);
    }

    // Check if colors is array of string then colors transfer to be string 
    // if(Array.isArray(testData.colors)){
    //     data.colors = JSON.stringify(data.colors);
    // }

    // Check if sizes is array of string then sizes transfer to be string 
    // if(Array.isArray(data.sizes)){
    //     data.sizes = JSON.stringify(data.sizes);
    // }

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.brand = !isEmpty(data.brand) ? data.brand : '';
    data.condition = !isEmpty(data.condition) ? data.condition : '';
    // testData.colors = !isEmpty(testData.colors) ? testData.colors : '';
    // data.sizes = !isEmpty(data.sizes) ? data.sizes : '';

    if(Validator.isEmpty(data.name)){
        errors.name = "Product name field is required"
    }

    if(Validator.isEmpty(data.description)){
        errors.description = "Product description field is required"
    }
    
    if(Validator.isEmpty(data.price)){
        errors.price = "Product price field is required"
    }

    if(Validator.isEmpty(data.brand)){
        errors.brand = "Product brand field is required"
    }
    
    if(Validator.isEmpty(data.condition)){
        errors.condition = "Product condition field is required"
    }

    // if(Validator.isEmpty(testData.colors)){
    //     errors.colors = "Product colors field is required"
    // }

    // if(Validator.isEmpty(data.sizes)){
    //     errors.name = "Product sizes field is required"
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}