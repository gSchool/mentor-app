var express = require('express');
var router = express.Router();
var queries = require('../data/queries');

router.get('/', function(req, res, next) {
    var mentors = queries.getMentors().then(function(mentors){
        res.render('index', {mentors});
    });
});

module.exports = router;
