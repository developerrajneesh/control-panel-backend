const express = require('express');
const { createContact, getSingleContact, deleteContact, updateContact, getContact } = require('../controllers/contact.controller');
const router = express()


router.post('/create-contact',createContact)
router.get('/get-contact',getContact)
router.get('/contact/:id',getSingleContact)
router.put('/update-contact/:id',updateContact)
router.delete('/delete-contact/:id',deleteContact)

module.exports = router