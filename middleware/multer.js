const multer = require("multer");
const fs = require("fs");
const path = require("path");
// //storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(__dirname, "../public/csv-upload"), {
      recursive: true,
    });
    cb(null, path.join(__dirname, "../public/csv-upload"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

//upload
const upload = multer({ storage: storage });

module.exports = { upload };
