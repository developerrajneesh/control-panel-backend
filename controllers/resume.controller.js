const resumeModel = require("../models/resume.model");


const createResume = async (req, res) => {
    try {
        const data = req.body
        data.resume = req?.file?.filename
        const newresume = new resumeModel({ ...data });
        await newresume.save();
        res.status(201).json(newresume); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getResume = async (req, res) => {
    try {
        const resumes = await resumeModel.find();
        res.status(200).json(resumes); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};
const getResumeLeatest = async (req, res) => {
    try {
        const resumes = await resumeModel.find();
        if (!resumes[resumes.length -1]) {
            res.status(200).json({msg:"No resume found"}); // 200 OK
        }
        res.status(200).json(resumes[resumes.length -1]); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


module.exports = { getResume ,createResume ,getResumeLeatest};
