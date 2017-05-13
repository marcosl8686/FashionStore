var db  = require('../models');
var express = require('express');
var router  = express.Router();

router.get("/", function(req, res){
	res.render("main", {
		layout: "main"
	});
});

router.get("/signup", function(req, res){
	res.render("registration", {
		layout: "main-registration"
	});
})

module.exports = router;



