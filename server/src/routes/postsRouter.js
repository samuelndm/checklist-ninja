const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')

router.get('/', PostController.index)
router.post('/', PostController.save)
router.delete('/:id', PostController.delete)

module.exports = router
