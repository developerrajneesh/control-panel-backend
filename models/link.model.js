const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema(
  {
    github: {
      type: String,
      required: true,
     
    },
    linkedin: {
      type: String,
      required: true,
     
    },
    instagram: {
      type: String,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
     
    },
    whatsapp: {
      type: String,
      required: true,
     
    },
    phone: {
      type: String,
      required: true,
     
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("link", linkSchema);
