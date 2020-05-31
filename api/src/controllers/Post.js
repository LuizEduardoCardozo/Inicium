const mongoose = require('mongoose');
const Post = mongoose.model("Post");

module.exports = {
    async getAllPosts(req,res) {
        const posts = await Post.find();
        return res.json(posts);
    },
    async createPost(req,res) {
        const post = await Post.create(req.body);
        return res.json(post);
    },
    async destroy(req,res) {
        await Post.findByIdAndDelete(req.params.id);
    }
}
