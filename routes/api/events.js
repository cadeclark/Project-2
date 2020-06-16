const router = require("express").Router();
const eventsController = require("../../controller/eventsController")
// Matches with "/api/events"
router.route("/create").post(eventsController.create);
// find by creator goes here
router.route("/creator/:creator").get(eventsController.findByCreator)
//Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .patch(eventsController.update);
router.route("/")
    .get(eventsController.findAll)
router.route("/remove/:id").delete(eventsController.delete);
module.exports = router;
