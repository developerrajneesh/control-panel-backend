const blogModel = require("../models/blog.model");

const createBlog = async (req, res) => {
    try {
        const {tags,...data} = req.body
        console.log(tags.split(","));

        data.img = req?.file?.filename
        data.tags = tags.split(",")

        const newBlog = new blogModel({ ...data});
        await newBlog.save();
        res.status(201).json(newBlog); // 201 Created
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const getBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json(blogs); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedBlog); // 200 OK
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await blogModel.findByIdAndRemove(id);
        res.status(204).send({message:"One item deleted"}); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};


const getSingleBlog = async (req, res) => {
    try {
        const { title } = req.params;

        const blog = await blogModel.findOne({title: title});
        if (blog) {
            res.status(200).json(blog); // 200 OK
        } else {
            res.json({ error: 'Blog not found', message: 'Blog with the provided Title does not exist' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};
const getBlogByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const blog = await blogModel.findOne({category: category});
        if (blog) {
            res.status(200).json(blog); // 200 OK
        } else {
            res.json({ error: 'Blog not found', message: 'Blog with the provided Title does not exist' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', message: error.message });
    }
};

module.exports = { createBlog, getSingleBlog, getBlogByCategory,deleteBlog, updateBlog, getBlog };
