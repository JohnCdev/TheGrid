const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/new-post')
    .post(postController.create);

router.route('/user-posts')
    .post(postController.getUser);

router.route('/feed-posts')
    .post(postController.getFeed);

router.route('/clan-posts')
    .post(postController.getClanFeed)

module.exports = router;