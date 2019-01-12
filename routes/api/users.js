const express = require('express');
const router  = express.Router();

const User = require('../../models/User');

router.get('/test', (req, res) => res.json({msg: 'user works'}));

router.post('/register', (req, res) => {
    const { name, email, password, avatar } = req.body;
    res.json({ name, email, password, avatar });

})

module.exports = router;