const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create: (req, res) => {
    const reference = req.body.clanName.replace(/\s/g, "");
    db.Clan.find({ clanName: reference }).then(dbModel => {
      //if any show up tell the client their account cannot be created
      if (dbModel.length > 0) res.sendStatus(400);
      else {
        //otherwise hash the password and create the user
        jwt.verify(req.token, process.env.JWT, (err, authData) => {
          if (err) {
            res.sendStatus(403);
          } else {
            const profileImg =
              req.body.clanPic ||
              "Default" + Math.floor(Math.random() * 10 + 1);
            db.Clan.create({
              clanName: req.body.clanName,
              clanReferenceName: req.body.clanName.replace(/\s/g, "-"),
              clanFounder: req.body.clanFounder,
              clanProfileImage: profileImg,
              clanDiscord: req.body.clanDiscord,
              clanActiveGame: req.body.clanGames,
              clanDescription: req.body.clanDescription,
              clanTimeZone: req.body.clanTimeZone,
              clanMembers: [req.body.clanFounder]
            })
              .then( response => {
                db.Profile.updateOne({userName: req.body.clanFounder}, { $push: {clans: req.body.clanName }}).then(user => {
                  res.json({ ClanCreated: true });
                })
              })
              .catch(err => console.log(err));
          }
        });
      }
    });
  },
  getClan: (req, res) => {
    db.Clan.find({ clanReferenceName: req.params.clan }).then(data =>
      res.json({ data })
    );
  },
  getClanList: async (req, res) => {
    const clanListReturn = [];
    for (var i = 0; i < req.body.clans.length; i++) {
      await db.Clan.find({
        clanName: req.body.clans[i]
      })
        .then(clan => {
          const returnItem = {
            _id: clan[0]._id,
            clanName: clan[0].clanName,
            clanReferenceName: clan[0].clanReferenceName,
            clanProfileImage: clan[0].clanProfileImage
          };
          clanListReturn.push(returnItem);
          console.log(clanListReturn)
        })
        .catch(err => console.log(err));
    }
    res.json(clanListReturn);
  },
  joinClan: (req, res) => {
    const clanName = req.body.clanName;
    const user = req.body.userName;
    db.Clan.find({ clanName }).then(clan => {
      if (clan[0].clanMembers.includes(user)) {
        const alreadyAMember = "user is already a member";
        res.json(alreadyAMember);
      } else {
        db.Profile.updateOne(
          { userName: user },
          { $push: { clans: clanName } }
        ).then(data => {
          db.Clan.updateOne(
            { clanName },
            { $push: { clanMembers: user } }
          ).then(clan => {
            res.json(clan);
          });
        });
      }
    });
  },
  leaveClan: (req, res) => {
    const clanName = req.body.clanName;
    const userName = req.body.userName;
    db.Clan.find({ clanName }).then(clan => {
      const newMembers = clan[0].clanMembers.filter(
        member => member !== userName
      );
      db.Clan.updateOne(
        { clanName },
        { $set: { clanMembers: newMembers } }
      ).then(data => {
        db.Profile.find({ userName }).then(data => {
          const newClans = data[0].clans.filter(clan => clan !== clanName);
          console.log("new clans: " + newClans);
          db.Profile.updateOne(
            { userName },
            { $set: { clans: newClans } }
          ).then(data => {
            res.json(data);
          });
        });
      });
    });
  },
  searchForClans: (req, res) => {
    const input = req.params.searchQuery;
    db.Clan.find({ clanName: new RegExp(input, "i") }).then(users => {
      const searchResults = users.map(clan => {
        return {
          _id: clan._id,
          clanName: clan.clanName,
          clanReferenceName: clan.clanReferenceName,
          profileImg: clan.clanProfileImage
        };
      });
      res.json(searchResults);
    });
  }
};
