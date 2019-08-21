const router = require("express").Router();
const bookRoutes = require("./books");
// const coinRoutes = require("./coins");


// Book routes
router.use("/books", bookRoutes);
// router.use("/coins", coinRoutes);

module.exports = router;
