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
         default: [{ 
            type: String,
            unique: true 
            }] 
    },
    sentFriendRequests: {
        type: Array,
        default: [{ 
            type: String,
            unique: true 
        }]
    },
    receivedFriendRequests: {
        type: Array,
        default: [{ 
            type: String,
            unique: true 
        }]
    },
    updates : {
        type: Array,
        default: [{
            type: Object
        }]
    }
    
});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;