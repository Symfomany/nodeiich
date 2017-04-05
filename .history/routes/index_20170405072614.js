var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport = require('passport');

var app = express()
app.use(session({
  secret: 'sd1f31ds32f123sd13f21s3d1f321sd31f',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'djscrave',
  database: 'iich'
});


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  var query = connection.query('SELECT * FROM pages', function (mysql_err, mysql_res) {
    // if (mysql_err) {
    //   res.render('error', { error: mysql_err });
    // }
    // else {
    res.render('index',
      {
        pages: mysql_res
      });
    // }
  });
});

router.get('/edit/:id', function (req, res) {
  var id = request.params.id;
  var query = connection.query(`SELECT * FROM pages WHERE id = ${id}`, function (mysql_err, mysql_res) {

  });

  // res.send(JSON.stringify(pages));





  router.post('/tester', function (req, res) {
    var sess = req.session;
    if (sess.views) {
      sess.views++;
    } else {
      sess.views = 1;
    }
    res.render('test', { prenom: 'Boyer', sess: sess.views });
    res.end();
  });

  module.exports = router;