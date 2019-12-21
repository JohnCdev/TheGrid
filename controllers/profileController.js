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
        res.json({ hello: "this finall works" });
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
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ hello: "this finall works" });
      }
    });
  },
  getUserProfile: (req, res) => {
    console.log(req.params.profile);
    db.Profile.find({ userName: req.params.profile }).then(data =>
      res.json({ data })
    );
  },
  getProfile: (req, res) => {
    db.Profile.find({ userName: req.body.userName }).then(data =>
      res.json({ data })
    );
  },

  updateProfile: (req, res) => {
    db.Profile.updateOne(
      { userName: req.body.userName },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          age: req.body.age,
          currentCity: req.body.currentCity,
          lastUpdated: req.body.lastUpdated
        }
      }
    )
      .then(data => res.json({ data }))
      .catch(err => console.log(err));
  }
}