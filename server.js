var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
//var env = require("dotenv").load();
//var exphbs = require("express-handlebars");
const logger = require("morgan");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;
const db = require("./models");

// const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));
app.use(routes)

require("./routes/html-routes.js")(app);

// For Passport
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
// app.set("views", "./app/views");
// app.engine(
//   "hbs",
//   exphbs({
//     extname: ".hbs",
//   })
// );
// app.set("view engine", ".hbs");

app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

//Models
var models = require("./models");
// console.log("THIS IS MODELS in server.js file", models);

//Routes

require("./routes/api-routes.js")(app, passport);

//load passport strategies

require("./config/passport/passport.js")(passport, models.user);

//Sync Database


// app.listen(3000, function(err) {
//   if (!err) console.log("Site is live");
//   else console.log(err);
// });
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
);
  });
});
