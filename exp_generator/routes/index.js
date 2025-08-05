var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Section', name:"Harshil" });
});

router.get('/add_student', function(req, res, next) {
  res.render('add_student', {});
});

router.post('/process_student', function(req, res, next) {
  console.log(req.body)
  res.send("Done che bhai")
});

module.exports = router;
