var express 			= require("express");
var path 				= require("path");
var bodyParser 			= require("body-parser");
var methodOverride 		= require("method-override");
var exphbs 				= require("express-handlebars");
var session 			= require("express-session");
var passport 			= require("./config/passport");
var PORT 				= process.env.PORT || 8090;
var db 					= require("./models");
var app 				= express();
var nodemailer			= require("nodemailer");
var xoauth2				= require("xoauth2");
var authCheck = require('./config/middleware/attachAuthenticationStatus');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

require("./routes.js")(app);

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: (app.get('env') === 'development') ? err : {}
//   })
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

module.exports = app;
