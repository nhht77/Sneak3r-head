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

})



module.exports = router;