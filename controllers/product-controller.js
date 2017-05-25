var db = require('../models');
var express = require('express');
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
var product = require("../models/product.js");

router.get('/members', isAuthenticated, function (req, res) {
    db.Products.findAll({}).then(function (data) {
        res.render("product", {products: data, layout: "main-product"});
    })
});


router.get('/rendermodal/:productnumber', isAuthenticated, function (req, res) {
    db.Products.findAll({where: {itemNum: req.params.productnumber}}).then(function (data) {
        res.render("partials/product-modal", {itemList: data, layout: false});
    })
});
module.exports = router;