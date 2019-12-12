var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//Schema That will be associated with the User Model
var ProfileSchema = new Schema({

  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  },
  age: {
      type: Number,
      required: true
  },
  currentCity: {
      type: String,
      required: true
  },
  lastLogIn: {
      type: Date
  },
  friendList: {
      type: Array
  }
});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;