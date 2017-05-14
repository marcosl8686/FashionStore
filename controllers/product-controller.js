var db  = require('../models');
var express = require('express');
var router  = express.Router();

router.get("/members", function(req, res){
	res.render("product", {
		layout: "main-product"
	});
});

module.exports = router;