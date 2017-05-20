var db  = require('../models');
var express = require('express');
var router  = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
var test;

router.get("/total", isAuthenticated, function(req, res){
	res.render("checkout", {itemTest: test, layout: "main1"});
});


router.post('/items', isAuthenticated,function(req,res) {
	console.log('this is req.body',req.body.obj)
	test = req.body.obj
	// var test2 = Object.keys(test)[0];

	// console.log("this is test2", test2);
	// console.log('type of test2',typeof test2);
	// test2 = JSON.stringigy(test2);
	// test3 = JSON.parse(test2);
	// console.log('test3',test3);
	// console.log('type of test3', typeof test3);

	// console.log(test + "  ITEMNUM")
	// console.log(test + "OKKKKKKKkkkkkk")
	// console.log("WOOOORKINGGGGGGG")
	// 	res.redirect('/total');
});



module.exports = router;