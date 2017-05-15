module.exports = function(app){

	var accounts_controller = require("./controllers/accounts-controller.js");
	var app_controller = require("./controllers/app-controller.js")
	var admin_controller = require("./controllers/admin-controller.js");
	var prod_controller = require("./controllers/product-controller.js");

	app.use("/accounts", accounts_controller);
	app.use("/", app_controller);
	app.use("/product", prod_controller);
	app.use("/admin", admin_controller);

}