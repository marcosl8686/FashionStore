var db  = require('../models');
var express = require('express');
var router  = express.Router();
var adminAuthenticated = require("../config/middleware/adminAuthenticated");


router.get("/setup", adminAuthenticated, function(req, res){
    res.render("admin", {
		layout: "main-admin"
	});
});

module.exports = router;