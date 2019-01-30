const express = require('express');
const passport = require('passport');
const router  = express.Router();

const Conditions = require('../../models/Condition');
const validateConditionInput = require('../../validation/conditions');

// @route   GET api/conditions/test
// @desc    Tests conditions route
// @access  Public
router.get('/test', (req, res) => res.send({ msg: 'Conditions Test Routes Works'}));


// @route   GET api/conditions/
// @desc    Get all conditions route
// @access  Public
router.get('/', (req, res) => {
    Conditions.find({}).then( (err, conditions) => {
        if(err) res.json(err);
        res.json(conditions);
    })
})


// @route   POST api/conditions/
// @desc    Post new conditions route
// @access  Private
router.post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
    const {errors, isValid} = validateConditionInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }

    if(req.user.role === 0 ){
        errors.authorization = "You are not authorized to have access to this information";
        res.status(401).json(req.user.role);
    }

    Conditions.findOne({name: req.body.name}).then(condition => {
        if(condition){
            errors.name = "This condition is already registered";
            return res.status(400).json(errors);
        } else {
            const newCondition  = new Conditions({name: req.body.name})
            newCondition.save()
                    .then(condition => res.json(condition))
                    .catch(err => console.log(err))
        }
    })
});

module.exports = router;