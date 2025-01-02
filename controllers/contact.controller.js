const contactModel = require("../models/contact.model")
const nodemailer = require('nodemailer');

const createContact = async (req, res) => {
    try {
        const newContact = new contactModel({ ...req.body });
        await newContact.save();
if(newContact.msg){
    sendEmail(newContact)
}
        res.status(201).json(newContact); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getContact = async (req, res) => {
    try {
        const Contacts = await contactModel.find();
        res.status(200).json(Contacts); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const updateContact= async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await contactModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedContact); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await contactModel.findByIdAndRemove(id);
        res.status(204).send({message:"One item deleted"}); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getSingleContact = async (req, res) => {
    try {
        const { id } = req.params;

        const Contact = await contactModel.findOne({_id: id});
        if (Contact) {
            res.status(200).json(Contact); // 200 OK
        } else {
            res.json({ error: 'Contact not found', message: 'Contact with the provided id does not exist',id:id });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};




  // Function to send an email
  async function sendEmail(newContact) {

    
    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'developer.rajneeshshukla@gmail.com',
              pass: 'uftgwscwumixuryf'
            }
          });
          
      // Define email options
      const mailOptions1 = {
        from: 'developer.rajneeshshukla@gmail.com',
        to: newContact.email,
        subject: newContact.subject,
        text: newContact.msg
      };
      const mailOptions2 = {
        from: 'developer.rajneeshshukla@gmail.com',
        to: 'developer.rajneeshshukla@gmail.com',
        subject: 'New Contact Request',
        html: `
        ${newContact.name}
        ${newContact.email}
        ${newContact.phone}
        ${newContact.subject}
        ${newContact.msg}
        `
      };
  
      // Send the email
      const info = await transporter.sendMail(mailOptions1);
      const info2 = await transporter.sendMail(mailOptions2);
  
      console.log('Email sent: ', info);
      console.log('Email sent: ', info2);
    } catch (error) {
      console.error('Error sending email: ', error.message);
    }
  }
  
module.exports = { createContact, getSingleContact, deleteContact, updateContact, getContact };
