var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab3' });
});

router.get('/father', (req, res, next)=>{
  res.render('father', {title:'father'});
})

router.get('/mother', (req, res, next)=>{
  res.render('mother', {title:'mother'});
})

router.get('/me', (req, res, next)=>{
  res.render('me', {title:'me'});
})

module.exports = router;
