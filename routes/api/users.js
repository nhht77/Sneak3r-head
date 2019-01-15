const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');

const User = require('../../models/User');
const configKey  = require('../../config/key').key


router.get('/test', (req, res) => res.json({msg: 'user works'}));

router.post('/register', (req, res) => {
    // const errors = {};

    User.findOne({email: req.body.email}).then(( user, error) => {
        if(error) res.status(400).send(error);
        
        if(user){
            // let errors = {};
            // errors.email = 
             return res.status(400).json({errors:"Email has already been used"});
        } else {
            const { name, email, password, avatar } = req.body;
            const newUser  = new User({ name, email, password, avatar });

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

router.post('/login', (req, res) => {	
    const errors = {};	
    const {email, password} = req.body;	


     User.findOne({email}).then( user => {	
        if(!user){	
            errors.email = "User is not found";	
            res.status(404).send(errors)	
        } 	

         bcrypt.compare(password, user.password, (isMatch) => {	
            if(!isMatch){	
                const {_id: id, name, email, password } = user;	
                const payload = {id, name, email, password};	

                 jwt.sign(payload, configKey, {expiresIn:3600}, (err, token) => {	
                    res.json({	
                        success:true,	
                        token: `bearer ${token}`	
                    })	
                })	
            } else {	
                errors.password = "The password is incorrect";	
                res.status(404).send(errors);	
            }	
        })	
    }).catch( err => console.log(err));	
});



module.exports = router;