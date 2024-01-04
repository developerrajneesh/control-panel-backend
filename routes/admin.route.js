const express = require('express');
const router = express()
const {createAdmin, adminLogin} = require('../controllers/admin.controller');

router.post('/register',createAdmin)
router.get('/login',adminLogin)

module.exports = router