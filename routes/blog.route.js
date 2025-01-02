const express = require('express');
const { createBlog ,getSingleBlog,getBlogByCategory ,deleteBlog,updateBlog,getBlog} = require('../controllers/blog.controller');
const upload = require('../middlewere/multer');
const router = express()


router.post('/create-blog',upload.single('img'),createBlog)
router.get('/get-blog',getBlog)
router.get('/get-blog/:category',getBlogByCategory)
router.get('/blog/:title',getSingleBlog) 
router.put('/update-blog/:id',upload.single('img'),updateBlog)
router.delete('/delete-blog/:id',deleteBlog)


module.exports = router