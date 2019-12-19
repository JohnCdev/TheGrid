const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  requestFriend: (req, res) => {
    const requestData = JSON.parse(JSON.stringify(req.body));
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(req.body);
        //add potential friend to requests made in sender's profile

        db.Profile.findOneAndUpdate(
          { userName: req.body.receiver },
          { $push: { receivedFriendRequests: req.body.sender } }
        ).then(result => {
          db.Profile.findOneAndUpdate(
            { userName: req.body.sender },
            { $push: { sentFriendRequests: req.body.receiver } },
            { new: true }
          ).then(result => {
            res.json({ receivedFriendRequests: result.sentFriendRequests });
          });
        });
        //add potential friend to received requests in receiver's profile
      }
    });
  },
  removeFriend: (req, res) => {
    const requestData = JSON.parse(JSON.stringify(req.body));
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ hello: "this finall works" });
      }
    });
  },
  acceptFriend: (req, res) => {
    const requestData = JSON.parse(JSON.stringify(req.body));
    const accepter = req.body.sender;
    const requester = req.body.receiver;
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
          console.log(req.body)
        db.Profile.find({userName: requester})
            .then(result => {
                console.log('first database query happening')
                const oldFriendRequests = result[0].sentFriendRequests
                const newFriendRequests = oldFriendRequests.filter(request => request !== accepter)
                db.Profile.findOneAndUpdate({ userName: requester }, {$push: {friendList: accepter }}, {$set: { sentFriendRequests: newFriendRequests }})
                    .then(result => {
                        console.log('second database query happening')
                        db.Profile.find({ userName: accepter })
                            .then(result => {
                                console.log('third database query happening')
                                const oldFriendRequests = result[0].receivedFriendRequests
                                console.log(oldFriendRequests)
                                const newFriendRequests = oldFriendRequests.filter(request => request !== requester)
                                console.log(newFriendRequests)
                                const newFriends = [...result[0].friendList, requester]
                                db.Profile.findOneAndUpdate({ userName: accepter}, {$set: {friendList: newFriends }}, {$set: { receivedFriendRequests: newFriendRequests }})
                                    .then(result => res.json({receivedFriendRequests: newFriendRequests, friendList: newFriends }))
                            })
                    })
               
            })
      }
    });
  }
};
