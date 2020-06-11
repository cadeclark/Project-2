const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(logger("dev"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

    app.listen(PORT, () => {
        console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
        )
    })



// google maps api
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 7
  });
}