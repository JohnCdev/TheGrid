var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//Schema That will be associated with the User Model
var ClanSchema = new Schema({
  clanName: {
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