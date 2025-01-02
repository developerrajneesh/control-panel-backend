const linkModel = require("../models/link.model");

const createLink = async (req, res) => {
    try {
        const newlink = new linkModel({ ...req.body });
        await newlink.save();
        res.status(201).json(newlink); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getLink  = async (req, res) => {
    try {
        const link = await linkModel.find();
        res.status(200).json(link); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const updateLink = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedlink = await linkModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedlink); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const deleteLink = async (req, res) => {
    try {
        const { id } = req.params;
        await linkModel.findByIdAndRemove(id);
        res.status(204).send({message:"One item deleted"}); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getSingleLink = async (req, res) => {
    try {
        const { id } = req.params;

        const link = await linkModel.findOne({_id: id});
        if (link) {
            res.status(200).json(link); // 200 OK
        } else {
            res.json({ error: 'link not found', message: 'link with the provided id does not exist',id:id });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

module.exports = { createLink ,getSingleLink ,deleteLink,updateLink,getLink}
