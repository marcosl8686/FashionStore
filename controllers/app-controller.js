var db  = require('../models');
var express = require('express');
var router  = express.Router();

router.get("/", function(req, res){
	res.render("main", {
		layout: "main"
	});
});

module.exports = router;



