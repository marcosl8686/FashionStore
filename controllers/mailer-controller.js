var express = require('express');
var router  = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 25,
	secureConnection: false,
	auth: {
		user: 'firebasers@gmail.com',
		pass: '3fireBasers'
	},
	tls: {
		rejectUnauthorized: false
	}

});



router.post("/sendmail", function(req, res){
	console.log(req.body);

	var mailOptions = {
		from: '<firebasers@gmail.com>',
		to: req.body.email,
		subject: req.body.name + " has a question for you!",
		text: req.body.message
	}

	transporter.sendMail(mailOptions, function(err, res){
		if(err){
			console.log(err);
			console.log(mailOptions);
		}else{
			console.log("YAYAYAYAYA");
			console.log(res);
		}
	});
	res.send("mail sent!");
});

module.exports = router;
