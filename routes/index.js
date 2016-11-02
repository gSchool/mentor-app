var express = require('express');
var router = express.Router();
var queries = require('../data/queries');

router.get('/', function(req, res, next) {
    var mentors = queries.getMentors().then(function(mentors){
        res.render('index', {mentors});
    });
});

router.post('/', function(req, res, next){
    queries.addMentor({
        name: req.body["person-name"],
        email: req.body["person-email"],
        bio: req.body["person-bio"],
        specialties: req.body["person-specialties"]
    }).then(function(){
        res.redirect('/');
    });
});

module.exports = router;
