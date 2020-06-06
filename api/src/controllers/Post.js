const mongoose = require('mongoose');
const Post = mongoose.model("Post");

const users = require('../services/users_api');

module.exports = {
    async index(req,res) {
        const posts = await Post.find();
        return res.json(posts);
    },

    async create(req,res) {
        const {username, hash} = req.query;

        const user = users.filter(user => user.login === username);

        if(user.length === 0) {
            return res.json({error: "User not found"});
        }

        const data = {title: req.body.title, content: req.body.content , author:username};

        if(user[0].auth === hash) {
            const post = await Post.create(data);
            return res.json(post);
        }else{
            return res.json({error: "User is not authenticated"});
        }

    },

    async destroy(req,res) {
        await Post.findByIdAndDelete(req.params.id);
    },

}
