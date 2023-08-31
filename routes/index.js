var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    color: "#FFFFFF",
    textColor: "#000000"
  });
});

router.post('/', function (req, res){
  res.render('index', {
    color: req.body.colorPicker,
    textColor: req.body.textColorPicker
  })
})
module.exports = router;
