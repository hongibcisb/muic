var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/callback", (req, res) => {
  console.log(req.json)
})

module.exports = router;
