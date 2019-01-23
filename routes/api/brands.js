const express = require('express');
const router  = express.Router();

const Brands = require('../../models/Brands');

const validateBrandsInput = require('../../validation/brands');

router.get('/test', (req, res) => res.send({ msg: 'Brands Test Routes Works'}));

router.get('/', (req, res) => {
    Brands.find({}).then((err, brands) => {
        if(err) return res.status(400).json(err);
        res.status(200).json(brands);
    })
});

router.post('/', (req, res) => {
    const {errors, isValid} = validateBrandsInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
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