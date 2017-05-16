var express = require('express');
var db  = require('../models');
var multer = require('multer');
var uniqid = require('uniqid');
var mkdirp = require('mkdirp');

var path = require('path');
var adminAuthenticated = require("../config/middleware/adminAuthenticated");



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    	console.log(req.body);
        var dir = 'public/assets/temp';
        mkdirp(dir, function(err){
            cb(err, dir)
        })
    },
    filename: function (req, file, cb) {
        cb(null, uniqid() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage});
var router  = express.Router();

router.post('/post',adminAuthenticated, upload.single('test'), function (req, res) {

    console.log('hit');
    //console.log(req.file);
    console.log('path', req.file.path);
    console.log('name', req.body);
	var path = req.file.path;
    var modPath = path.replace("public",'');



	db.Products.create({
		itemNum: req.body.num,
		itemName: req.body.name,
		color: req.body.color,
		img: modPath,
		category: req.body.description,
		price: req.body.price
	}).then(function() {
		//res.send({redirect: '/a'});
	}).catch(function(err) {
		res.json(err);
	});


});

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