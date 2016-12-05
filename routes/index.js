var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Our Service' });
});

/* GET customers page. */
router.get('/customers', function(req, res, next) {
  res.render('customers', { title: 'Customers' });
});

/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
});


/* GET jobs page. */
router.get('/jobs', function(req, res, next) {
  res.render('jobs', { title: 'Jobs' });
});

/* GET News page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'News' });
});

module.exports = router;
