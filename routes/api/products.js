const express  = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const router   = express.Router();

const Products = require('../../models/Products');

const validateProductInput = require('../../validation/products');

// @route   GET api/products/ids
// @desc    Get products by array of ids route
// @access  Public
router.get('/ids', (req, res) => {
    let type = req.query.type;
    let items = req.query.id;

    if(type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item=>{
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.
    find({ '_id':{$in:items}}).
    populate('brand').
    populate('conditions').
    exec( (err,products) => res.status(200).json(products))
});


// @route   POST api/products/
// @desc    Post product route
// @access  Private
router.post('/', passport.authenticate('jwt', {session:false}) , (req, res) => {
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

// @route   GET api/products/
// @desc    Get [all] products by Arrival/Sells
// @access  Public

// BY ARRIVAL /api/products?sortBy=createdAt&order=desc&limit=4
// BY SELL /api/products?sortBy=sold&order=desc&limit=100
router.get('/', (req, res) => {
    
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Products
    .find()
    .populate('brand')
    .populate('conditions')
    .sort([[sortBy,order]])
    .limit(limit)
    .then(products => res.send(products))
    .catch(err => res.status(400).send(err))
})

// @route   GET api/products/:id
// @desc    Get product by id
// @access  Public
router.get('/:id',(req,res)=>{

    Products
    .find({ '_id':req.params.id})
    .populate('brand')
    .populate('conditions')
    .then( products => res.status(200).send(products))
    .catch( err => res.status(400).send(err));
});


module.exports = router;