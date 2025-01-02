const express = require('express');
const { createLink ,getSingleLink ,deleteLink,updateLink,getLink} = require('../controllers/link.controller');
const router = express()


router.post('/create-link',createLink)
router.get('/get-link',getLink)
router.get('/link/:title',getSingleLink)
router.put('/update-link/:id',updateLink)
router.delete('/delete-link/:id',deleteLink)


module.exports = router