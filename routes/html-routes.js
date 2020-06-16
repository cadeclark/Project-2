const path = require("path");

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
