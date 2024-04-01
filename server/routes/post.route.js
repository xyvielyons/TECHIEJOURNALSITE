import express from 'express'
import { verify } from '../utils/verify.js'
import { createPost,getPosts,deletePosts } from '../controllers/post.controller.js'
const router = express.Router()
router.route('/createpost')
.post(verify,createPost)
router.route('/getposts')
.get(getPosts)
router.route('/deletepost/:postId')
.delete(verify,deletePosts)
export default router