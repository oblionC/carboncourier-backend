var express = require('express');
var router = express.Router();
var controller = require('../controller/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new-user', controller.newUser) 

module.exports = router;
