// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
  	if (req.user.admin) {
  		return res.redirect("/admin/setup");
  	}
  	if (req.user.approvedBuyer){
  		return next();
  	}
    return res.redirect("/pending");
  }
  // If the user isnt' logged in, redirect them to the login page
  return res.redirect("/");
};
