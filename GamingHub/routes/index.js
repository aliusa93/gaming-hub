var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    name: "Gaming Hub",
    top: "Gaming Hub",
    msg: "Enjoy your time on Gaming Hub!",
  }, );
});



module.exports = router;