var express = require('express');
var router = express.Router();
var session = require('express-session')
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
  database: 'canicule'
});

connection.connect();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

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
    console.log(result.insertId);
  });

  res.render('test', { prenom: 'Julien' });
});

app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
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