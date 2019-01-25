const express = require('express');
const router  = express.Router();

const validateProductInput = require('../../validation/products');

router.get('/test', (req, res) => res.send({ msg: 'Products Test Routes Works'}));

router.post('/', (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    } 

    res.json(req.body);
})

module.exports = router;