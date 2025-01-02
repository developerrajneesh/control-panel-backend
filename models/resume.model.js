const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    resume:{
     type: String,
      required: true,
      unique: true
    },
},{timestamps:true })

module.exports = mongoose.model('resume', resumeSchema);
