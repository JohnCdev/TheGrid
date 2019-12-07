const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
