const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    profileIMG: {
        type: String,
        required: true
    },
    postID: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    timeStamp: {
        type: Date,
        required: true,
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment