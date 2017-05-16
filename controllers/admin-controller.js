var db  = require('../models');
var express = require('express');
var router  = express.Router();
var adminAuthenticated = require("../config/middleware/adminAuthenticated");


router.get("/setup",adminAuthenticated, function(req, res){
    res.render("admin", {
		layout: "main-admin"
	});
});

///Testing Admin-page without Authentication////////
/*******/

router.get("/items", adminAuthenticated, function(req, res){
	res.render("admin-items", {
		layout: "main-admin"
	});
});

router.get("/newItem", adminAuthenticated, function(req,res){
	res.render("admin-item-new",{
		layout: "main-admin"
	})
});

router.get('/activeClients',adminAuthenticated, function(req,res){
	res.render("admin-active", {
		layout: "main-admin"
	})
});

router.get('/pendingClients',adminAuthenticated, function(req,res){
	res.render("admin-pending", {
		layout: "main-admin"
	})
});

///*************************////

module.exports = router;