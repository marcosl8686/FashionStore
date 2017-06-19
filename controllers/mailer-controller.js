var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var pdfInvoice = require('pdf-invoice');
var fs = require('fs');

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


router.post("/sendmail", function (req, res) {
    console.log(req.body);

    var mailOptions = {
        from: req.body.email,
        to: 'joliefashionrequest@gmail.com',
        subject: req.body.name + " has a question for you!",
        text: req.body.message + " \n Name: " + req.body.name + " \n Email: " + req.body.email
    }

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log(err);
            console.log(mailOptions);
        } else {
            console.log("YAYAYAYAYA");
            console.log(res);
        }
    });
    res.send("mail sent!");
});

router.post('/sendInvoice', function (req, res) {
    console.log('inside /sendInvoice')
    console.log(req.body);
    var array = req.body.itemsObj
    console.log('array', req.body.itemsObj);

    var body = 'This is the order for ' + array[array.length - 1].name + '. \n Order Invoice:\n';

    var mybody = [];
    for (var i = 0; i < array.length - 1; i++) {
        var temp = array[i];
        var myObj = {
            amount: temp.itemPrice,
            name: temp.itemName.substring(0,20),
            color: temp.itemColor,
            quantity: temp.itemQuantity
        };
        mybody.push(myObj);
        var text = 'Order : ' + temp.itemId + ',  ' + temp.itemColor + ', Quantity: ' + temp.itemQuantity + '\n';
        body = body + text;
    }
    var text = 'Name: ' + array[array.length - 1].name + ', Email: ' + array[array.length - 1].email + ', total: ' + array[array.length - 1].total;
    body = body + text;

    var document= pdfInvoice({
        company: {
            address: array[array.length -1].address,
            email: array[array.length-1].email,
            name: array[array.length-1].name
        },
        customer: {
            name: array[array.length -1].name
        },
        items: mybody,
    });

    document.generate();
    var myPath = array[array.length - 1].name + '.pdf';
    document.pdfkitDoc.pipe(fs.createWriteStream(myPath))


    var mailOptions = {
        from: req.body.email,
        to: 'joliefashionrequest@gmail.com',
        subject: array[array.length - 1].name + " has an order for you!",
        text: body,
        attachments: {
            filename: myPath,
            path: myPath
        }
    };



    console.log('mailOptions', mailOptions);
    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log(err);
            console.log(mailOptions);
        } else {
            console.log("YAYAYAYAYA");
            console.log(res);
        }
    });

    res.send('invoice sent!!')
});



module.exports = router;
