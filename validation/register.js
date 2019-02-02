const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    // condition ? value-if-true : value-if-false
    data.firstname = !isEmpty(data.firstname) ? data.firstname : ""; 
    data.email = !isEmpty(data.email) ? data.email : ""; 
    data.password = !isEmpty(data.password) ? data.password : ""; 
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""; 

    if(Validator.isEmpty(data.firstname)) {
        errors.firstname = "First name must not be empty";
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

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
      }
    
    if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}