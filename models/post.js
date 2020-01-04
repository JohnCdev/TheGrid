var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    profileImg:{ 
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        required: true,
    },
    comments: [
        {
            type: Array,
            default: []
        }
    ],
    clanName: {
        type: String,
    }
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;