const express = require('express');
const { createProject, getSingleProject, deleteProject, updateProject, getProject} = require('../controllers/project.controller');
const upload = require('../middlewere/multer');
const router = express()


router.post('/create-project',upload.single('img'),createProject)
router.get('/get-project',getProject)
router.get('/project/:id',getSingleProject)
router.put('/update-project/:id',upload.single('img'),updateProject)
router.delete('/delete-project/:id',deleteProject)


module.exports = router