
const express = require('express');
const { getResume ,createResume,getResumeLeatest} = require('../controllers/resume.controller');
const upload = require('../middlewere/multer');
const router = express()


router.post('/upload-resume',upload.single('resume'),createResume)
router.get('/get-resume',getResume)
router.get('/get-resume-leatest',getResumeLeatest)

// router.put('/update-project/:id',upload.single('img'),updateProject)
// router.delete('/delete-project/:id',deleteProject)


module.exports = router