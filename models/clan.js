var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//Schema That will be associated with the User Model
var ClanSchema = new Schema({
  clanName: {
    type: String,
    required: true
  },
  clanReferenceName: {
    type: String,
    required: true
  },
  clanFounded: {
    type: Date,
    default: Date.now
  },
  clanTimeZone: {
    type: String,
    required: true
  },
  clanDescription: {
    type: String,
    default: "No Description given."
  },
  clanProfileImage: {
    type: String,
    default: "Default" + Math.floor(Math.random() * 10 + 1),
    required: true
  },
  clanDiscord: {
    type: String
  },
  clanActiveGame: {
    type: Array,
    default: []
  },
  clanFounder: {
      type: String
  },
  clanMembers: {
    type: Array,
    default: []
  },
  clanPosts: {
    type: Array,
    default: []
  },
  clanFeed: {
    type: Array,
    default: []
  }
});

var Clan = mongoose.model("Clan", ClanSchema);

module.exports = Clan;