const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/new-post')
    .post(postController.create);

router.route('/user-posts')
    .get(postController.getUser);

/*router.route('/feed-posts')
.get(postController.getFeed);*/

module.exports = router;