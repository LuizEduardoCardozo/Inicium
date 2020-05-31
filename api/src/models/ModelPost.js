const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    "title": {
        type: String,
        required: true
    },
    "content": {
        type: String,
        required: true
    },
    "postDate": {
        type: Date,
        default: Date.now
    },
    "author": {
        type: String,
        default: "Admin"
    },
    "category": {
        type: String
    }
})

module.exports = mongoose.model("Post", PostSchema);
