const router = require("express").Router();
const userRoutes = require('./users');
const profileRoutes = require('./profiles');
const postRoutes = require('./posts');
const clanRoutes = require('./clans')

//user routes
router.use("/users", userRoutes);

router.use('/profiles', profileRoutes);

router.use('/posts', postRoutes);

router.use('/clans', clanRoutes);

module.exports = router;