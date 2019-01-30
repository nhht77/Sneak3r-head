const express  = require('express');
const passport = require('passport'); 
const router   = express.Router();

const Products = require('../../models/Products');

const validateProductInput = require('../../validation/products');

router.get('/test', (req, res) => res.send({ msg: 'Products Test Routes Works'}));

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

// BY ARRIVAL
// /articles?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=100
router.get('/', (req, res) => {
    
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.
    find().
    populate('brand').
    populate('conditions').
    sort([[sortBy,order]]).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.send(articles)
    })
})

module.exports = router;