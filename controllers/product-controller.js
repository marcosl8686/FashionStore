var db  = require('../models');
var express = require('express');
var router  = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/members", isAuthenticated, function(req, res){
	res.render("product", {
		layout: "main-product"
	});
});

module.exports = router;