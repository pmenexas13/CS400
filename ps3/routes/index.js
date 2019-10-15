var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { aStr: 'How you doin?' });
});

router.route('/').post(function (req, res, next) {
  //vars on req.body
  res.render('index', {inputStr: req.body.inputStr,
                       len: req.body.inputStr.length});
});

module.exports = router;
