const router = require('express').Router();
const userController = require('../../controllers/userController');


router.route('/login')
  .post(userController.logIn);

router.route('/create-new-user') //http://localhost:3000/api/create-new-user
  .post(userController.create);
  
router.route('/profile')
  .post(userController.getProfile)


module.exports = router;