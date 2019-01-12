const express = require('express');
const router  = express.Router();

router.get('/test', (req, res) => res.send({ msg: 'Posts Test Routes Works'}));

module.exports = router;