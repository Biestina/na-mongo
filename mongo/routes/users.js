var express = require('express');
var router = express.Router();
const userModel = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({}, (err, users) => {
    console.log(users);
    res.send('respond with a resource');
  })

  
});

module.exports = router;
