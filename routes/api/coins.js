const router = require("express").Router();
const coinsController = require("../../controllers/coinsController");

// Matches with "/api/books"
router.route("/")
  .get(coinsController.findAll)
  .post(coinsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(coinsController.findById)
  .put(coinsController.update)
  .delete(coinsController.remove);

module.exports = router;
