const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  //create new user
  create: (req, res) => {
    console.log(req.body);
    //find users with this username
    db.User.find({ userName: req.body.userName }).then(dbModal => {
      //if any show up tell the client their account cannot be created
      if (dbModal.length > 0) res.sendStatus(400);
      else {
        //otherwise hash the password and create the user
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          db.User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: hash
          })
            //tell the client their account was successfully created
            .then(res.json({ userCreated: true }))
            .catch(err => console.log(err));
          db.Profile.create({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            currentCity: req.body.currentCity,
            lastUpdated: new Date()
          })
            .then(/*res.json({ profileCreated: true })*/)
            .catch(err => console.log(err));
        });
      }
    });
  },
  //user log in
  logIn: (req, res) => {
    //find the user who wants to log in
    db.User.find({ userName: req.body.userName }).then(data => {
      //compare the req's password to the stored password using bcrypt since db's password is hashed
      bcrypt.compare(req.body.password, data[0].password).then(pwCheck => {
        //if the return is true, create a client object with their profile information
        if (pwCheck) {
          db.Profile.find({ userName: req.body.userName }).then(data => {
            const client = data[0];
            user = {
              userName: client.userName,
              firstName: client.firstName,
              lastName: client.lastName,
              age: client.age,
              lastUpdated: client.lastUpdated,
              friendList: client.friendList,
              clans: client.clans,
              sentFriendRequests: client.sentFriendRequests,
              receivedFriendRequests: client.receivedFriendRequests,
              profileIMG: client.profileIMG,
              steamIGN: client.steamIGN,
              discordIGN: client.discordIGN,
              battleNetIGN: client.battleNetIGN,
              epicIGN: client.epicIGN,
              originIGN: client.originIGN,
              favGames: client.favGames
            };
            //assign a token to this user and send the user information and token back to the user
            jwt.sign({ user }, process.env.JWT, (err, token) => {
              if (err) throw err;
              else {
                const data = [user, token];
                res.json({ data });
              }
            });
          });
        } else res.json({ message: "Invalid login" });
      });
    });
  },

  authTest: (req, res) => {
    const requestData = JSON.parse(JSON.stringify(req.body));
    jwt.verify(req.token, process.env.JWT, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({ hello: "this finall works" });
      }
    });
  }
};
