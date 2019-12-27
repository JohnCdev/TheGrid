const router = require("express").Router();
const userRoutes = require('./users');
const profileRoutes = require('./profiles');
const postRoutes = require('./posts');

//user routes
router.use("/users", userRoutes);

router.use('/profiles', profileRoutes);

router.use('/posts', postRoutes);

module.exports = router;