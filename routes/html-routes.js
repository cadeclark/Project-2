// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/create_event", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/createEvent.html"));
  });

  app.get("/your_events", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/yourEvents.html"));
  });
};

// const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/create_event", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/createEvent.html"));
  });

  app.get("/your_events", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/yourEvents.html"));
  });

};
