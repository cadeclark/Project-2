var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");
const partyAnimal = [];
const PORT = process.env.PORT || 3000;
const db = require("./models");
var exphbs = require("express-handlebars");

const passport = require("./config/passport");

// const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(routes);

// Requiring our Routes
require("./routes/html-routes.js")(app);
require("./routes/html-routes.js")(app);

// For Passport
app.get("/", (req, res) => {
  res.render("register.html");
});

app.get("/", (req, res) => {
  res.render("login.html");
});

app.post("/register", (req, res) => {
  req.body.id;
});

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session());
// persistent login sessions

app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Models
var models = require("./models");
// console.log("THIS IS MODELS in server.js file", models);

//Routes
var authRoute = require("./routes/auth.js")(app);

require("./routes/api-routes.js")(app, passport);

//load passport strategies

//Sync Database
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/ in your browser. DATABASE LOOKS FINE",
      PORT,
      PORT
    );
  });
});
