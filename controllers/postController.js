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
        const feed = []
        for (var i = 0; i < friendList.length; i++) {
            await db.Post.find({
                userName: friendList[i],
                clanName: ""
            })
                .then(posts => {
                    for (var j = 0; j < posts.length; j++) {
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
    }
}