//var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  console.log("this is passport in api-routes!!");
  app.get("/signup", function(req, res) {
    res.send("Sign-Up Page");
  });

  app.get("/signin", function(req, res) {
    res.send("Sign-In Page");
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup",
    })
  );
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin",
    })
  );

  app.get("/dashboard", function(req, res) {
    res.send("Login succesful u hit /dashbaord dashboard page coming soon");
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};
