const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title:{
        type: String,
      required: true,
    },
    img:{
        type: String,
      required: true,
    },
    author:{
        type: String,
      required: true,
    },
    technology:[String],
    discription:{
        type: String,
      required: true,
    },
},{timestamps:true })

module.exports = mongoose.model('project', projectSchema);
