const express = require('express');
const router = express.Router();

const PostController = require('./controllers/Post');

router.get( "/", PostController.index);
router.post("/", PostController.create);
// router.delete("/:id", PostController.destroy);

module.exports = router