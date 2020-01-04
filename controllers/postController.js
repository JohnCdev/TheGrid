const db = require('../models');
const jwt = require("jsonwebtoken");

module.exports = {

    create: (req, res) => {
        console.log(req.body)
        db.Post.create({
            userName: req.body.userName,
            profileImg: req.body.profileImg,
            content: req.body.content,
            timeStamp: Date.now(),
            clanName: req.body.clanName
        })
            .then(res.json({ postCreated: true }))
            .catch(err => console.log(err));
    },

    getUser: (req, res) => {
        db.Post.find({
            userName: req.body.userName,
            clanName: ""
        }).sort({ timeStamp: -1 })
            .then(data => {
                res.json(data)
            })
            .catch(err => console.log(err))
    },

    getFeed: async (req, res) => {
        const friendList = req.body.friendList
        friendList.push(req.body.userName)
        const feed = []
        for (var i = 0; i < friendList.length; i++) {
            await db.Post.find({
                userName: friendList[i],
                clanName: ""
            })
                .then(posts => {
                    for (var j = 0; j < posts.length; j++) {
                        db.Comment.find({postID: posts[j]._id})
                        .then(commentArr => {
                            console.log(commentArr)
                            posts[j].comments.push(commentArr)
                        })
                        .catch(err => console.log(err))
                        feed.push(posts[j])
                    }

                })
                .catch(err => console.log(err))
        }
        const sortedFeed = feed.sort((a, b) => b.timeStamp - a.timeStamp)
        res.json(sortedFeed)
    },

    getClanFeed: (req, res) => {
        db.Post.find({ clanName: req.body.clanName }).sort({ timeStamp: -1 })
            .then(data => {
                res.json(data)
            })
            .catch(err => console.log(err))
<<<<<<< HEAD
    },

    createComment: (req, res) => {
        db.Comment.create({
            userName: req.body.userName,
            profileIMG: req.body.profileImg,
            postId: req.body._id,
            body: req.body.body
        })
            .then(comment => {
                console.log(comment)
                db.Post.findOneAndUpdate({ _id: req.body._id }, {
                    $push: {
                        comments: comment._id
                    }
                },
                    { new: true })
                    .then(data => {
                        console.log(data)
                        res.json({comment: true})
                    })
                    .catch(err => console.log(err))
            })
        }

=======
    }
>>>>>>> 648550bca8dc83a5bfeca31f9ad40bd6bf19231f
}