const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  create: (req, res) => {
    db.Clan.find({ clanName: req.body.clanName }).then(dbModel => {
      //if any show up tell the client their account cannot be created
      if (dbModel.length > 0) res.sendStatus(400);
      else {
        //otherwise hash the password and create the user
        jwt.verify(req.token, process.env.JWT, (err, authData) => {
          if (err) {
            res.sendStatus(403);
          } else {
            db.Clan.create({
              clanName: req.body.clanName,
              clanFounder: req.body.clanFounder,
              clanDescription: req.body.clanDescription,
              clanTimeZone: req.body.clanTimeZone,
              clanMembers: [req.body.clanFounder]
            })
              .then(res.json({ ClanCreated: true }))
              .catch(err => console.log(err));
          }
        });
      }
    });
  },
  getClan: (req, res) => {
    console.log(req.params.clan)
    db.Clan.find({ clanName: req.params.clan }).then(data =>
      res.json({ data })
    );
  }
};
