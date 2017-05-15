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
});


///Testing Admin-page without Authentication////////
/*******/
router.get("/setup", function(req, res){
	//home page of the admin page
    res.render("admin", {
        layout: "main-admin"
    });
});

router.get("/items", function(req, res){
	res.render("admin-items", {
		layout: "main-admin"
	});
});

router.get("/newItem", function(req,res){
	res.render("admin-item-new",{
		layout: "main-admin"
	})
});

router.get('/activeClients', function(req,res){
	res.render("admin-active", {
		layout: "main-admin"
	})
});

router.get('/pendingClients', function(req,res){
	res.render("admin-pending", {
		layout: "main-admin"
	})
});

///*************************////
module.exports = router;



