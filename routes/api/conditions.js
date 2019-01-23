const express = require('express');
const router  = express.Router();

const Conditions = require('../../models/Condition');
const validateConditionsInput = require('../../validation/conditions');

router.get('/test', (req, res) => res.send({ msg: 'Conditions Test Routes Works'}));

router.get('/', (req, res) => {
    Conditions.find({}).then( (err, conditions) => {
        if(err) res.json(err);
        res.json(conditions);
    })
})

router.post('/', (req, res) => {
    const { isValid, errors } = validateConditionsInput(req.body);

    if(!isValid){
        res.status(400).json(errors);
    }

    res.json(req.body);
})

module.exports = router;