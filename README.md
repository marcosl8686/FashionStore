# Jolie
Project 2: Data

## Live Link 
 - https://jolie-wholesale.herokuapp.com/

## Description on how to use the app
This wholesale clothing website has been built for a live client, Jolie.  The purpose is three-fold: 1) new customers can register to become an authorized customer, 2) authorized customers can view the brand's items and create sales orders, and 3) the admin can authorize new customers, add/delete items, and view sales orders.

Simply sign in or log in on the home page, and the web app will direct you to the page(s) you are authorized to view.

## Project Requirements

- Must use a Node and Express Web Server
- Must be backed by a MySQL Database with a Sequelize ORM  
- Must have both GET and POST routes for retrieving and adding new data
- Must be deployed using Heroku 
- Must utilize at least one new library, package, or technology that we haven’t discussed in class
- Must have a polished frontend / UI 
- Must have folder structure that meets MVC Paradigm
- Must meet good quality coding standards (indentation, scoping, naming)
- Utilize Handlebars for Server-Side Templating
- Incorporate Authentication 


## Technologies Used

- HTML/CSS/Bootstrap to create layout that will be aestetically pleasing to both live client and his customers
- Handlebars to generate different layouts based on which page user is directed to
- JavaScript/jQuery to dynamically update HTML based on user input
- Node.js to control server.js APIs and routing
- Express.js as server framework
- Sequelize to set up database in node.js
- Passport.js to authenticate users
- Multer for uploading files
- Nodemailer to send emails


## Code Explaination
- Used MVC Paradigm to navigate through all post/get requests 
- Example: Nodemailer to send email to admin when customer has a question or when customer submits a sales order

- Specifies email address that generated emails get sent to
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


- Email that gets generated when customer submits "contact us" form
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

- Email that gets sent when customer submits sales order. Generates invoice that includes products ordered in an array.
router.post('/sendInvoice', function(req, res){
	console.log('inside /sendInvoice')
    console.log(req.body);
	var array = req.body.itemsObj
	console.log('array', req.body.itemsObj);

	var body = 'This is the order for ' + array[array.length -1].name + '. \n Order Invoice:\n';
	//generate text
	for(var i = 0; i< array.length -1; i++){
		var temp = array[i];

		var text = 'Order : ' + temp.itemId + ',  ' + temp.itemColor + ', Quantity: ' + temp.itemQuantity + '\n';
		body = body + text;
	}
	var text = 'Name: ' + array[array.length-1].name + ', Email: ' + array[array.length-1].email + ', total: ' + array[array.length-1].total;
	body = body + text;
    var mailOptions = {
        from: req.body.email,
        to: 'joliefashionrequest@gmail.com',
        subject: array[array.length-1].name + " has an order for you!",
        text: body
    };

    console.log('mailOptions', mailOptions);
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            console.log(err);
            console.log(mailOptions);
        }else{
            console.log("YAYAYAYAYA");
            console.log(res);
        }
    });

    res.send('invoice sent!!')
});

module.exports = router;

-------------
