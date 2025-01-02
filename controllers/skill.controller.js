const skillModel = require("../models/skill.model");


const createSkill = async (req, res) => {
    try {
        const newskill = new skillModel({ ...req.body });
        await newskill.save();
        res.status(201).json(newskill); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


const getSkill = async (req, res) => {
    try {
        const skill = await skillModel.find();
        res.status(200).json(skill); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedskill = await skillModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedskill); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        await skillModel.findByIdAndRemove(id);
        res.status(204).send({message:"One item deleted"}); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


const getSingleSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await skillModel.findOne({_id: id});
        if (skill) {
            res.status(200).json(skill); // 200 OK
        } else {
            res.json({ error: 'skill not found', message: 'skill with the provided id does not exist',id:id });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};



module.exports = { createSkill ,getSingleSkill ,deleteSkill,updateSkill,getSkill}