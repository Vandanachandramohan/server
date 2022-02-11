import express from 'express';
import {createArticle,getAllPosts,getArticle,updatePost,deletePost} from '../controller/article-controller.js';
import {uploadImage,getImage} from '../controller/image-controller.js';
//import upload from '../utils/upload';

const router=express.Router();


router.post('/create-article',createArticle);

router.get('/api/article-list', getAllPosts);
router.get('/api/article/:id',getArticle);
router.post('/api/update-article/:id',updatePost);
router.delete('/api/delete-article/:id',deletePost);
//router.post('file/upload',upload.single('file') ,uploadImage);
router.get('/api/file/:filename',getImage);


    

export default router;