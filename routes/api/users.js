const router = require('express').Router();
const userController = require('../../controllers/userController');
const verifyToken = require('./tokenVerifier')

router.route('/login')
  .post(userController.logIn);

router.route('/create-new-user')
  .post(userController.create);

router.route('/get-profile/:profile')
  .get(userController.getUserProfile)  
  
router.route('/profile')
  .post(userController.getProfile)
  .put(userController.updateProfile)

  router.route('/auth-test')
  .post(verifyToken, userController.authTest)

module.exports = router;