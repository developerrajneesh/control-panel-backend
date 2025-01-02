const mongoose = require('mongoose');
const contantSchema = new mongoose.Schema({
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
    tags:[String],
    contant:{
        type: String,
      required: true,
    },
},{timestamps:true })

module.exports = mongoose.model('blog', contantSchema);
