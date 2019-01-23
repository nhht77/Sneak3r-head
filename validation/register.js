const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    // condition ? value-if-true : value-if-false
    data.name = !isEmpty(data.name) ? data.name : ""; 
    data.email = !isEmpty(data.email) ? data.email : ""; 
    data.password = !isEmpty(data.password) ? data.password : ""; 

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name must not be empty";
    } 

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email must not be empty";
    } 

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password must not be empty";
    } 

    if(!Validator.isLength(data.password, { min: 5, max: undefined })) {
        errors.password = "Password length must have at least 5 charaters";
    } 

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    } 
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}