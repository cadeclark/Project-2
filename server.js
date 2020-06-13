var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
//var env = require("dotenv").load();
//var exphbs = require("express-handlebars");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const db = require("./models");

// const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// google maps api
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 7,
  });
}
//For BodyParser
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());

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
console.log("THIS IS MODELS in server.js file", models);

//Routes

require("./routes/api-routes.js")(app, passport);

//load passport strategies

require("./config/passport/passport.js")(passport, models.user);

//Sync Database

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

// app.listen(3000, function(err) {
//   if (!err) console.log("Site is live");
//   else console.log(err);
// });

app.listen(PORT, () => {
  console.log(
    "Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
