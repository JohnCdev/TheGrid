var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//Schema That will be associated with the User Model
var ProfileSchema = new Schema({

    userName: {
        type: String,
        required: true
    },

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
    lastUpdated: {
        type: Date
    },
    friendList: {
         type: Array, 
         default: [] 
    },
    sentFriendRequests: {
        type: Array,
        default: []
    },
    receivedFriendRequests: {
        type: Array,
        default: []
    },
    updates : {
        type: Array,
        default: []
    }
    
});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;