var express = require('express');
const StudentModel = require('../models/student');
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
  //console.log(req.body)
  var body = {
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact
  }
  var model = StudentModel(body)
  model.save()
  .then(()=>{
    res.send("Done che bhai")
  })
  .catch((err)=>{
    res.send("Nai thayu bhai 😭" +  err)
  })
});

router.get('/view-student-api', (req, res, next)=>{
  data = StudentModel.find()
  .then((data)=>{
    res.json(data)
  }
  )
  .catch(()=>{
    res.send("Data nathi madto bhai")
  })
})

router.get('/view-student', (req, res, next)=>{
  data = StudentModel.find()
  .then((data)=>{
    res.render('view-student', {data:data})
  }
  )
  .catch(()=>{
    res.send("Data nathi madto bhai")
  })
})

module.exports = router;
