const express = require('express');
const { createSkill ,getSingleSkill ,deleteSkill,updateSkill,getSkill} = require('../controllers/skill.controller');
const router = express()


router.post('/create-skill',createSkill)
router.get('/get-skill',getSkill)
router.get('/skill/:title',getSingleSkill)
router.put('/update-skill/:id',updateSkill)
router.delete('/delete-skill/:id',deleteSkill)


module.exports = router