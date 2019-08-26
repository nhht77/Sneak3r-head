const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcryptjs');
const gravatar = require('gravatar');
const jwt      = require('jsonwebtoken');
const passport = require('passport');

const configKey  = require('../../config/keys').secretOrKey

// Load User model
const User = require('../../models/User');

// Load Input Validation
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'user works'}));


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const {isValid, errors} = validateRegisterInput(req.body);

    if(!isValid) res.status(400).json(errors);

    User.findOne({email: req.body.email}).then( user => {
        
        if(user){
             errors.email = "Email has already been used";
             return res.status(400).json({errors});
        } else {
            const { firstname, lastname, email, password} = req.body;
            const avatar = gravatar.url(email, { s: '200', r: 'pg', d:'mm'})
            const newUser  = new User({ firstname, lastname, email, password, avatar });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save()
                           .then(user => res.json(user))
                           .catch(err => res.json(err));
                })
            })
        }
    });
});


// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', async (req, res) => {
    const { isValid, errors } = validateLoginInput(req.body);
    
    if(!isValid) return res.status(400).json(errors);
    
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email})	
    
        if(!user){	
            errors.email = "User is not found";	
            res.status(400).send(errors)	
        } 	
    
        const isMatch = await bcrypt.compare(password, user.password);	
        
        if(isMatch){	
            const {_id: id, firstname, lastname, email, password, role, cart, history } = user;	
            const payload = {id, firstname, lastname, email, password, role, cart, history};	
    
                jwt.sign(payload, process.env.SECRET_OR_KEY, {expiresIn:3600}, (err, token) => {
                console.log(process.env.SECRET_OR_KEY)
                console.log(token)	
                res.json({	
                    success:true,	
                    token: `bearer ${token}`	
                })	
            })	
        } else {	
            errors.password = "The password is not correct";	
            res.status(400).send(errors);	
        }	

    } catch (error) {
        console.log(error)
    }
    
	
});


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', {session:false}), (req, res) => {
    res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email:req.user.email,
        role: req.user.role
    })
})

module.exports = router;