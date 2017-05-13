module.exports = function(app){

	var users_controller = require("./controllers/users-controller.js");
	var app_controller = require("./controllers/app-controller.js")
	// var admin_controller = require("./controllers/admin-controller.js");
	// var prod_controller = require("./controllers/product-controller.js");

	app.use("/members", users_controller);
	app.use("/", app_controller);
	// app.use("/admin", admin_controller);

}