var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kittens, Cats & Doggies R Us' });
});

router.get('/dogs', function(req, res, next) {
  res.render('dogs', {});
});

router.get('/blogs', function(req, res, next) {
  res.render('blog', {});
});

module.exports = router;
