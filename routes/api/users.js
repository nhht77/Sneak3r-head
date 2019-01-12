const express = require('express');
const router  = express.Router();

const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: 'user works'}));

router.post('/register', (req, res) => {
    // const errors = {};

    User.findOne({email: req.body.email}).then(( user, error) => {
        // if(error) res.status(400).send(error);
        
        if(user){
            // let errors = {};
            // errors.email = ;
             return res.status(400).json({errors:"Email has already been used"});
        } //else {
            //const { name, email, password, avatar } = req.body;
            //res.json({ name, email, password, avatar });
            // const newUser  = new User({ name, email, password, avatar });

            // newUser.save()
            //        .then(user => res.send(user))
            //        .catch(err => res.send(err));
        //}
    });

})

module.exports = router;