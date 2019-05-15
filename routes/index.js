var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/blah", (req, res) => {
  console.log(req.body)
  res.json({msg: "accepted"})
})

module.exports = router;
