const express = require('express');
const router = express.Router();

const PostController = require('./controllers/Post');

router.get( "/", PostController.getAllPosts);
router.post("/", PostController.createPost);
// router.delete("/:id", PostController.destroy);

module.exports = router