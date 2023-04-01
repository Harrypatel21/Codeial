const express = require('express');
const router  = express.Router();

const postController = require('../controllers/post_controllers');

router.get('/createPost', postController.createPost);

module.exports = router;