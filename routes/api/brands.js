const express = require('express');
const passport = require('passport')
const router  = express.Router();

const Brands = require('../../models/Brands');

const validateBrandsInput = require('../../validation/brands');

// @route   GET api/brands/test
// @desc    Tests brand route
// @access  Public
router.get('/test', (req, res) => res.send({ msg: 'Brands Test Routes Works'}));


// @route   GET api/brands
// @desc    Get all brands route
// @access  Public
router.get('/', (req, res) => {
    Brands.find({}).then( (err, brands) => {
        if(err) res.json(err);
        res.json(brands);
    })
    .catch(err => console.log(err))
}); 

// @route   POST api/brands/test
// @desc    Post all brands route
// @access  private
router.post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
    const {errors, isValid} = validateBrandsInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }

    if(req.user.role === 1 ){
        errors.authorization = "You are not authorized to have access to this information";
        res.status(401).json(req.user.role);
    }

    Brands.findOne({name: req.body.name}).then(brand => {
        if(brand){
            errors.name = "This brand is already registered";
            return res.status(400).json(errors);
        } else {
            const newBrand  = new Brands({name: req.body.name})
            newBrand.save()
                    .then(brand => res.json(brand))
                    .catch(err => console.log(err))
        }
    })
})
module.exports = router;