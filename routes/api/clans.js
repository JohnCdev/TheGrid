const router = require('express').Router();
const clanController = require('../../controllers/clanController');
const verifyToken = require('./tokenVerifier')

router.route('/create-clan')
    .post(verifyToken, clanController.create)

router.route(`/:clan`)
    .get(clanController.getClan)

router.route('/search/:searchQuery')
    .get(clanController.searchForClans)

module.exports = router