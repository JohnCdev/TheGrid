const router = require('express').Router();
const profileController = require('../../controllers/profileController');
const verifyToken = require('./tokenVerifier')

router.route('/request-friend')
    .post(verifyToken, profileController.requestFriend)

router.route('/remove-friend')
    .post(verifyToken, profileController.removeFriend)

router.route('/accept-friend')
    .post(verifyToken, profileController.acceptFriend)

module.exports = router