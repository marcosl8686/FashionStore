var db  = require('../models');
var express = require('express');
var router  = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.post('/items', isAuthenticated,function(req,res) {
	console.log(req.body)
	console.log("WOOOORKINGGGGGGG")
		res.render("checkout", {checkoutItem: req.body, layout: false});
});


router.get("/total", function(req, res){
	res.render("checkout", {
		layout: "main1"
	});
});

module.exports = router;