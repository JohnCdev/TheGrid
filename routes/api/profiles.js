const router = require('express').Router();
const profileController = require('../../controllers/profileController');
const verifyToken = require('./tokenVerifier')

router.route('/request-friend')
    .post(verifyToken, profileController.requestFriend)

router.route('/remove-friend')
    .post(verifyToken, profileController.removeFriend)

router.route('/accept-friend')
    .post(verifyToken, profileController.acceptFriend)

router.route('/get-profile/:profile')
    .get(profileController.getUserProfile)

router.route('/profile')
    .post(profileController.getProfile)
    .put(profileController.updateProfile)

router.route('/friend-list')
    .post(profileController.getAllyList)

module.exports = router