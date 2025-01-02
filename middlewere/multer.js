const multer = require('multer');

// Set up Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Define the destination folder for uploaded files
      cb(null, 'public/');
    },
    filename: (req, file, cb) => {
      // Define the filename for uploaded files
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  module.exports = upload;