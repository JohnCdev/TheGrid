const router = require('express').Router();
const userController = require('../../controllers/userController');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  console.log('this is running')
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    return res.sendStatus(403);
  }
}

router.route('/login')
  .post(userController.logIn);

router.route('/create-new-user') //http://localhost:3000/api/create-new-user
  .post(userController.create); 
  
router.route('/get-profile/:user-profile').get(userController.getProfile)  

  router.route('/auth-test')
  .post(verifyToken, userController.authTest)

module.exports = router;