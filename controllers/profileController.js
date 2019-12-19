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
      }
}