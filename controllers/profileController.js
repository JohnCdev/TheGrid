const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  requestFriend: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
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
      }
    });
  },
  removeFriend: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const requester = req.body.sender;
        console.log(req.body);
        const accepter = req.body.receiver;

        db.Profile.find({ userName: accepter }).then(result => {
          const newFriendList = result[0].friendList.filter(
            friend => friend.userName !== requester
          );
          db.Profile.findOneAndUpdate(
            { userName: accepter },
            { $set: { friendList: newFriendList } }
          ).then(result => {
            db.Profile.find({ userName: requester }).then(result => {
                console.log(accepter)
                console.log(accepter === result[0].friendList[0])
              const newFriendList = result[0].friendList.filter(
                friend => friend !== accepter
              );
              console.log(newFriendList)
              db.Profile.findOneAndUpdate(
                { userName: requester },
                { $set: { friendList: newFriendList } }
              ).then(result =>{
                  const friendRequests = result.receivedFriendRequests.filter(request => request !== accepter)
                res.json({
                  receivedFriendRequests: friendRequests,
                  friendList: newFriendList
                })}
              );
            });
          });
        });
      }
    });
  },
  acceptFriend: (req, res) => {
    const accepter = req.body.sender;
    const requester = req.body.receiver;
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        db.Profile.find({ userName: requester }).then(result => {
          const oldFriendRequests = result[0].sentFriendRequests;
          const newFriendRequests = oldFriendRequests.filter(
            request => request !== accepter
          );
          db.Profile.findOneAndUpdate(
            { userName: requester },
            { $push: { friendList: accepter } },
            { $set: { sentFriendRequests: newFriendRequests } }
          ).then(result => {
            db.Profile.find({ userName: accepter }).then(result => {
              const oldFriendRequests = result[0].receivedFriendRequests;
              const newFriendRequests = oldFriendRequests.filter(
                request => request !== requester
              );
              const newFriends = [...result[0].friendList, requester];
              db.Profile.findOneAndUpdate(
                { userName: accepter },
                { $set: { friendList: newFriends } },
                { $set: { receivedFriendRequests: newFriendRequests } }
              ).then(result =>
                res.json({
                  receivedFriendRequests: newFriendRequests,
                  friendList: newFriends
                })
              );
            });
          });
        });
      }
    });
  }
};
