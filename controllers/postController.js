const db = require('../models');
const jwt = require("jsonwebtoken");

module.exports = {
    create: (req, res) => {
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
                .then(async posts => {
                    for (var j = 0; j < posts.length; j++) {
                        await db.Comment.find({ postID: posts[j]._id })
                            .then(commentArr => {
                                posts[j].comments = commentArr
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
    },

    createComment: (req, res) => {
        db.Comment.create({
            userName: req.body.userName,
            profileIMG: req.body.profileIMG,
            postID: req.body.postID,
            body: req.body.body
        })
            .then(comment => {
                db.Post.findOneAndUpdate({ _id: req.body.postID },{$inc : {numComments: 1}})
                    .then(res.json({ comment: true }))
                    .catch(err => console.log(err))
            })
    },

    getComments: (req, res) => {
        db.Comment.find({ postID: req.body.postID })
            .then(comments => {
                res.json(comments)
            })
            .catch(err => console.log(err))
    }

}