const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateConditionInput(data) {
    let errors = {};
    
    data.name = !isEmpty(data.name) ? data.name:'';

    if(Validator.isEmpty(data.name)) {
        errors.name = "This field is required"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}