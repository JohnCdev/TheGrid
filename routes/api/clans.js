const router = require('express').Router();
const clanController = require('../../controllers/clanController');
const verifyToken = require('./tokenVerifier')

router.route('/create-clan')
    .post(verifyToken, clanController.create)

router.route(`/:clan`)
    .get(clanController.getClan)

router.route('/get-clan-list')
    .post(clanController.getClanList)

router.route('/search/:searchQuery')
    .get(clanController.searchForClans)

router.route('/join-clan')
    .post(clanController.joinClan)

router.route('/leave-clan')
    .post(clanController.leaveClan)    

module.exports = router