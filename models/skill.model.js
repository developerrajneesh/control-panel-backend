const mongoose = require('mongoose');
const skillSchema = new mongoose.Schema({
    skill:{
        type: String,
      required: true,
      unique: true
    },
    color:{
        type: String,
      required: true,
      unique: true

    },
},{timestamps:true })

module.exports = mongoose.model('skill', skillSchema);






