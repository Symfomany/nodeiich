var express = require('express');
var router = express.Router();
var session = require('express-session')
var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'sd1f31ds32f123sd13f21s3d1f321sd31f',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
  res.render('test', { prenom: 'Julien' });
});

router.post('/tester', function (req, res) {
  var sess = req.session;
  if (sess.views) {
    sess.views++;
  } else {
    sess.views = 1;
  }
  res.render('test', { prenom: 'Boyer' });
});

module.exports = router;
