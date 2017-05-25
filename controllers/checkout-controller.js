var db = require('../models');
var express = require('express');
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
var test;
var test2;

router.get("/total", isAuthenticated, function (req, res) {
    res.render("checkout", {itemTest: test, itemTest2: test2, layout: "main1"});
});


router.post('/items', isAuthenticated, function (req, res) {
    console.log("this is res ", res.req.user);
    test = req.body.obj
    test2 = res.req.user
});


module.exports = router;