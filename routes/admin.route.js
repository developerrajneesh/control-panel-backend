const express = require('express');
const router = express()
const {createAdmin, adminLogin} = require('../controllers/admin.controller');

router.post('/register',createAdmin)
router.post('/login',adminLogin)

module.exports = router