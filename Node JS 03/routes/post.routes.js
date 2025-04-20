import { Router } from "express";
import { addPost, editPost, getPost, getPosts } from "../controller/post.controller.js";

const router = Router();

router.get('/', getPosts);

router.get('/:id', getPost )

router.post('/addPost', addPost)

router.put('/editPost/:id', editPost)


export default router;