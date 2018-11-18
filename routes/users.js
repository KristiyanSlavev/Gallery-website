var express = require('express');
var routes = express.Router();

//Register
router.get('/register', function(req, res) {
	res.render('register');
});

//Log in
router.get('/login', function(req, res) {
	res.render('login');
});

module.exports = router;
