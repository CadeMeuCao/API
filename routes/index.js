var express = require('express');
var router  = express.Router();

var BreedController = require('../controller/BreedController');

router.post('/breeds', BreedController.create.bind(BreedController));
router.get('/breeds', BreedController.findAll.bind(BreedController));

module.exports = router;
