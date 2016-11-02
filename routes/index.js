var express = require('express');
var router = express.Router();
var queries = require('../data/queries');

router.get('/', function(req, res, next) {
    var mentors = queries.getMentors();
    res.render('index', {mentors});
});

module.exports = router;
