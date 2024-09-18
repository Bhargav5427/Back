let express = require("express");
const {
  uploadCsvFile,
  getCsvData,
} = require("../controller/csvhandler.controller");
const { upload } = require("../middleware/multer");
let route = express.Router();

route.post("/upload", upload.single("csvFile"), uploadCsvFile);
route.get("/getcsv", getCsvData);

module.exports = route;
