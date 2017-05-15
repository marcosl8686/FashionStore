var db  = require('../models');
var express = require('express');
var router  = express.Router();
var passport = require("../config/passport");
var multer = require('multer');
var uniqid = require('uniqid');
var mkdirp = require('mkdirp');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dir = 'temp/';
        mkdirp(dir, function(err){
            cb(err, dir)
        })
    },
    filename: function (req, file, cb) {
        cb(null, uniqid() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage});

router.post('/post', upload.single('test') ,function (req, res) {
    console.log('hit');
    console.log(req.file);
    console.log('path', req.file.path);

    res.json({file: req.file, body: req.body});
    //res.redirect('/');
});

router.get('/login', function(req, res){
    res.render('login', {
        title: 'Express Login'
    });
});

//this is the users_controller.js file
router.get('/main', function(req,res) {
	res.render('registration', {
    layout: 'main-registration'
  });
});

router.get('/sign-out', function(req,res) {
  req.logout();
  res.redirect("/");
});


// login
router.post('/login', passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/product/members");
});



// register a user
router.post('/signup', function(req,res) {
	db.Account.findAll({
    where: {email: req.body.email}
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
		} else {
      db.Account.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        taxID: req.body.taxID,
        address: req.body.address,
        suite: req.body.suite,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        approvedBuyer: req.body.approvedBuyer,
        admin: req.body.admin
      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        res.json(err);
      });
    }
	})
});

module.exports = router;
