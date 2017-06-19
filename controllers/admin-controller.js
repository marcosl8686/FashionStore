var express = require('express');
var db = require('../models');
var multer = require('multer');
var uniqid = require('uniqid');
var mkdirp = require('mkdirp');

var path = require('path');
var adminAuthenticated = require("../config/middleware/adminAuthenticated");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body);
        var dir = 'public/assets/temp';
        mkdirp(dir, function (err) {
            cb(err, dir)
        })
    },
    filename: function (req, file, cb) {
        cb(null, uniqid() + path.extname(file.originalname));
    }
});

var upload = multer({storage: storage});
var router = express.Router();

router.post('/post', adminAuthenticated, upload.single('test'), function (req, res) {
    var path = req.file.path;
    var modPath = path.replace("public", '');


    db.Products.create({
        itemNum: req.body.num,
        itemName: req.body.name,
        color: req.body.color,
        colorCode: req.body.colorCode,
        selected: req.body.colorBox,
        img: modPath,
        category: req.body.description,
        price: req.body.price
    }).then(function () {
        //res.send({redirect: '/a'});
    }).catch(function (err) {
        res.json(err);
    });


});

router.get("/setup", adminAuthenticated, function (req, res) {
    res.render("admin", {
        layout: "main-admin"
    });
});


router.get("/items", adminAuthenticated, function (req, res) {
    db.Products.findAll({}).then(function (data) {
        res.render("admin-items", {products: data});
    });
});

router.get("/newItem", adminAuthenticated, function (req, res) {
    res.render("admin-item-new", {
        layout: "main-admin"
    })
});

router.get('/activeClients', adminAuthenticated, function (req, res) {
    db.Account.findAll({}).then(function (data) {
        res.render("admin-active", {account: data});
    });
});

router.get('/pendingClients', adminAuthenticated, function (req, res) {
    db.Account.findAll({}).then(function (data) {
        res.render("admin-pending", {account: data});
    });
});

router.post('/activate/:id', adminAuthenticated, function (req, res) {
    var idVal = parseInt(req.params.id);
    console.log('/activate/id');
    console.log(idVal);
    db.Account.update({
        approvedBuyer: true,
    }, {
        where: {
            id: {
                $eq: idVal
            }
        }
    }).then(function(data){
        console.log('update');
        res.redirect("/admin/activeClients");
    });

});

router.post('/active/delete/:id', adminAuthenticated, function(req, res){
    var idVal = parseInt(req.params.id);
    console.log('/active/delete');
    console.log(idVal);
    db.Account.destroy({
        where: {
            id: {
                $eq: idVal
            }
        }
    }).then(function(data){
        console.log('destroy id: %s data', idVal);
        res.redirect('/admin/items');
    })
});

router.post('/item/delete/:id', adminAuthenticated, function (req, res) {
    var idVal = parseInt(req.params.id);
    console.log('/activate/id');
    console.log(idVal);
    db.Products.destroy({
        where: {
            id: {
                $eq: idVal
            }
        }
    }).then(function(data){
        console.log('destroy item: %s from database', idVal);
        res.redirect('/admin/items');
    })
});


///*************************////

module.exports = router;