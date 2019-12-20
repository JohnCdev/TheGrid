const router = require("express").Router();
const userRoutes = require('./users');
const bookRoutes = require("./books");
const profileRoutes = require('./profiles');
const postRoutes = require('./posts');



// Book routes
router.use("/books", bookRoutes);

//user routes
router.use("/users", userRoutes);

router.use('/profiles', profileRoutes);

router.use('/posts', postRoutes);

module.exports = router;