import express from 'express'
import { createPost,getPosts } from '../controllers/post.controller.js'
const router = express.Router()
router.route('/createpost')
.post(createPost)
router.route('/getposts')
.get(getPosts)

export default router