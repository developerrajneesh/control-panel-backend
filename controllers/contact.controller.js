const contactModel = require("../models/contact.model")


const createContact = async (req, res) => {
    try {
        const newContact = new contactModel({ ...req.body });
        await newContact.save();
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

module.exports = { createContact, getSingleContact, deleteContact, updateContact, getContact };
