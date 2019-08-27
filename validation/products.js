const Validator = require('validator'); 
const isEmpty   = require('./is-empty');

module.exports = function validateProductInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.price = !isEmpty(data.price) ? data.price : '';

    data.brand = !isEmpty(data.brand) ? data.brand : '';
    data.condition = !isEmpty(data.condition) ? data.condition : '';
    // data.available = !isEmpty(data.available) ? data.available : '';
    // data.shipping = !isEmpty(data.shipping) ? data.shipping : '';

    data.sizes = !isEmpty(data.sizes) ? data.sizes : '';
    data.colors = !isEmpty(data.colors) ? data.colors : '';
    
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
    
    // if(Validator.isEmpty(data.available)){
    //     errors.available = "Product availablility field is required"
    // }
    
    // if(Validator.isEmpty(data.shipping)){
    //     errors.shipping = "Product shipping field is required"
    // }

    if(Validator.isEmpty(data.colors)){
        errors.colors = "Product colors field is required"
    }

    if(Validator.isEmpty(data.sizes)){
        errors.sizes = "Product sizes field is required"
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}