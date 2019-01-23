const express = require('express');
const router  = express.Router();

router.get('/test', (req, res) => res.send({ msg: 'Brands Test Routes Works'}));

module.exports = router;