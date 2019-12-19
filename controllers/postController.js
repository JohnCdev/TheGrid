const db = require('../models');

module.exports = {

    create: (req, res) => {
        db.Post.create({
            userName: req.body.userName,
            content: req.body.content,
            timeStamp: Date.now()
        })
            .then(res.json({ postCreated: true }))
            .catch(err => console.log(err));
    },

    getUser: (req, res) => {
        console.log(req.body)
        db.Post.find({ userName: req.body.userName })
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => console.log(err))
    },

    /*getFeed: (req,res) => {

    }*/


}