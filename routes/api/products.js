const express    = require('express');
const passport   = require('passport');
const mongoose   = require('mongoose');
const multer     = require('multer');
const cloudinary = require('cloudinary');
const formidable = require('express-formidable');
const router     = express.Router();
const isEmpty    = require('../../validation/is-empty');

const Products   = require('../../models/Products');
const validateProductInput = require('../../validation/products');

// @route   POST api/products/upload
// @desc    Post product image
// @access  Private
router.post('/upload', formidable(),(req,res)=>{
  // if(req.user.role === 1 ){
    // errors.authorization = "You are not authorized to have access to this information";
    // res.status(401).json(req.user.role);
  // }

  cloudinary.uploader.upload(req.files.file.path,(result)=>{
    //   console.log(result);
      res.status(200).send({
          public_id: result.public_id,
          url: result.url
      })
  },{
      public_id: `${Date.now()}`,
      resource_type: 'auto'
  })
})

router.get('/removeImg', (req,res) => {
    let image_id = req.query.public_id;
    cloudinary.uploader.destroy(image_id,(error,result)=>{
        if(error) return res.json({succes:false,error});
        res.status(200).send('ok');
    })
})


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
// passport.authenticate('jwt', {session:false})
router.post('/', (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }
    
    console.log(`\n product.js: Name: ${req.body.name} \n`)
    console.log(`\n product.js: Sizes: ${req.body.sizes} \n`)
    console.log(`\n product.js: Colors: ${req.body.colors} \n`)

    console.log(`\n product.js: Brand: ${req.body.brand}`)
    console.log(`brand type: ${typeof req.body.brand}`);

    console.log(`\n product.js: Description: ${req.body.description} \n`)
    console.log(`\n product.js: Price: ${req.body.price} \n`)

    console.log(`\n product.js: condition: ${req.body.condition}`);
    console.log(`\n condition type: ${typeof req.body.condition}`);

    console.log(`\n product.js: available: ${req.body.available}`)
    console.log(`available type: ${typeof req.body.available}`);

    console.log(`\n product.js: Shipping: ${req.body.shipping}`)
    console.log(`shipping type: ${typeof req.body.shipping}`);
    console.log(`\n product.js: Imgs: ${JSON.stringify(req.body.imgs)} \n`)


    // console.log(`\n shipping type: ${typeof req.body.available}`);

    console.log(`\n product.js: Imgs: ${JSON.stringify(req.body)} \n`)

    console.log(`\n product.js: ${typeof req.body.name} \n`)

    Products.findOne({name: req.body.name}).then(product => {
        if(product){
            errors.name = "This product is already registered";
            return res.status(400).json(errors);
        } else {
            const newProduct  = new Products(req.body);

            if(typeof req.body.sizes !== "undefined"){
                newProduct.sizes = req.body.sizes.split(",");    
            }
            
            if(typeof req.body.colors !== "undefined"){
                newProduct.colors = req.body.colors.split(",");    
            }

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
    .populate('condition')
    .sort([[sortBy,order]])
    .limit(limit)
    .then(products => res.send(products))
    .catch(err => res.status(400).send(err))
})

// @route   POST api/products/shop
// @desc    Get Products by limits, brands, conditions filter
// @access  Public
router.post('/shop', (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100; 
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    for(let key in req.body.filters){
        if(req.body.filters[key].length >0 ){
            if(key === 'Prices'){
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            }else{
                findArgs[key] = req.body.filters[key]
            }
        }
    }

    Products.find(findArgs)
            .populate('brand')
            .populate('condition')
            .sort([[sortBy,order]])
            .skip(skip)
            .limit(limit)
            .then(products => res.json({products, size:products.length}))
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