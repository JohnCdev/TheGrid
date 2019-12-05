const router = require("express").Router();
const userRoutes = require('./users')
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

//user routes
router.use("/users", userRoutes)

module.exports = router;
