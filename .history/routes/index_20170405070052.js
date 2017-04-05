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
    else {
    res.render('index',
      {
        title: 'Hey',
        message: 'Hello there!',
        pages: mysql_res
      });
  }
});
});

// res.send(JSON.stringify(pages));




router.get('/test', function (req, res) {
  connection.query('SELECT COUNT(*) as nb FROM actors', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].nb);
  });

  connection.query('SELECT COUNT(*) as nb FROM actors', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].nb);
  });

  connection.query('INSERT INTO actors SET ?', { firstname: 'julien', lastname: 'boyer' }, function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
  });

  res.render('test', { prenom: 'Julien' });
});


router.post('/testo', function (req, res) {
  console.log(req.body);
  res.render('test', { prenom: 'Julien' });
});


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