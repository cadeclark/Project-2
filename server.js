const express = require("express");
const logger = require("morgan");
const routes = require("./routes")

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));
app.use(routes)

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
);
  });
});