var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
  res.render('test', { prenom: 'Julien' });
});

router.post('/tester', function (req, res) {
  res.render('test', { prenom: 'Boyer' });
});

module.exports = router;
