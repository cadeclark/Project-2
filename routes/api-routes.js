//var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  console.log("this is opassoirt in apiroutes!!");
  app.get("/signup", function(req, res) {
    res.send("singup pageeee");
  });

  app.get("/signin", function(req, res) {
    res.send("sign in pageee");
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
