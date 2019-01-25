const express = require('express');
const router  = express.Router();

const Products = require('../../models/Products');

const validateProductInput = require('../../validation/products');

router.get('/test', (req, res) => res.send({ msg: 'Products Test Routes Works'}));

router.post('/', (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    } 

    Products.findOne({name: req.body.name}).then(product => {
        if(product){
            errors.name = "This product is already registered";
            return res.status(400).json(errors);
        } else {
            const newProduct  = new Products(req.body)
            newProduct.save()
                    .then(product => res.json(product))
                    .catch(err => console.log(err))
        }
    })
})

module.exports = router;