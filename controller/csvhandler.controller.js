let cvs = require("csvtojson");
const { csvHandlerService } = require("../services");

let uploadCsvFile = async (req, res) => {
  try {
    let csvPath = req.file.path;

    let jsonArray = await cvs().fromFile(csvPath);

    let result = await csvHandlerService.uploadCsvFileData(jsonArray);

    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(200).json({
      status: "csv-Data Added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to Add csv-Data",
      error: error.message,
    });
  }
};

let getCsvData = async (req, res) => {
  try {
    let result = await csvHandlerService.getCsvFileData();
    if (!result) {
      throw new Error("Something Went Wrong");
    }
    res.status(200).json({
      status: "csv-Data Get successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to Get csv-Data",
      error: error.message,
    });
  }
};
module.exports = {
  uploadCsvFile,
  getCsvData,
};
