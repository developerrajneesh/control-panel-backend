const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({
    link:{
        type: String,
      required: true,
      unique: true
    },
    source:{
        type: String,
      required: true,
      unique: true
    },

},{timestamps:true })

module.exports = mongoose.model('link', linkSchema);
