module.exports = function(app){
	
	var buyer_controller = require("./controllers/buyer-controller.js");
	var admin_controller = require("./controllers/admin-controller.js")
	// var prod_controller = require("./controllers/product-controller.js");

	app.use("/members", buyer_controller);
	app.use("/admin", admin_controller);

}