const router = require('express').Router();
const userController = require('../../controllers/userController');


router.route('/api/login')
  .post(userController.logIn);

router.route('/api/new-user')
  .post(userController.create);  


module.exports = router;