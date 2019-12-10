const router = require('express').Router();
const userController = require('../../controllers/userController');


router.route('/api/login')
  .post(userController.logIn);

router.route('/create-new-user') //http://localhost:3000/api/create-new-user
  .post(userController.create);  


module.exports = router;