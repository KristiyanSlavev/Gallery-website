var express = require('express');
var routes = express.Router();

//Get homepage
router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;