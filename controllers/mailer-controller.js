var express = require('express');
var router  = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	port: 25,
	secureConnection: false,
	auth: {
		user: 'joliefashionrequest@gmail.com',
		pass: '3109818554'
	},
	tls: {
		rejectUnauthorized: false
	}

});



router.post("/sendmail", function(req, res){
	console.log(req.body);

	var mailOptions = {
		from: req.body.email,
		to: 'joliefashionrequest@gmail.com',
		subject: req.body.name + " has a question for you!",
		text: req.body.message + " \n Name: " + req.body.name + " \n Email: " + req.body.email
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
