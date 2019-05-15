var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {

    req.intent.displayName = intent;

    if (intent === 'Default Welcome Intent'){

        res.send('Welcome accepted');

    }


    
    res.send('respond with a resource');
  });

  router.post("/webhook", (req, res) => {
    //console.log(req.json)
    console.log(req.body)
    res.json({msg: "webhook"})
  })
module.exports = router;