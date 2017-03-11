var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


app.get('/test', function (req, res) {
  res.send('Oh Yeah!!');
});

module.exports = router;
