const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsConteoller');

router.get('/', postsController.getPosts);

router.post('/', postsController.addPost);

router.delete('/', postsController.deletePostAll);

router.delete('/:id', postsController.deletePostOne);

router.patch('/:id', postsController.patchPost);

module.exports = router;