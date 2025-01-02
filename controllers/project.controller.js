const projectModel = require("../models/project.model");

const createProject = async (req, res) => {
    try {
        const data = req.body
        data.img = req?.file?.filename
        const newproject = new projectModel({ ...data });
        await newproject.save();
        res.status(201).json(newproject); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getProject = async (req, res) => {
    try {
        const projects = await projectModel.find();
        res.status(200).json(projects); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedproject = await projectModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedproject); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await projectModel.findByIdAndRemove(id);
        res.status(204).send({message:"One item deleted"}); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getSingleProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await projectModel.findOne({_id: id});
        if (project) {
            res.status(200).json(project); // 200 OK
        } else {
            res.json({ error: 'project not found', message: 'project with the provided id does not exist',id:id });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

module.exports = { createProject ,getSingleProject ,deleteProject,updateProject,getProject};
