const csv = require("csvtojson");
const { csvHandlerService } = require("../services");

let uploadCsvFile = async (req, res) => {
  try {
    const csvPath = req.file.path;

    // Convert CSV to JSON
    const jsonArray = await csv().fromFile(csvPath);

    if (jsonArray.length === 0) {
      throw new Error("CSV file is empty");
    }

    // Pass the parsed data (jsonArray) to the service for insertion
    const result = await csvHandlerService.uploadCsvFileData(jsonArray);

    if (!result) {
      throw new Error("Failed to save CSV data");
    }

    res.status(200).json({
      status: "CSV data added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to add CSV data",
      error: error.message,
    });
  }
};

let getCsvData = async (req, res) => {
  try {
    let result = await csvHandlerService.getCsvFileData();
    if (!result) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      status: "CSV data fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to get CSV data",
      error: error.message,
    });
  }
};

module.exports = {
  uploadCsvFile,
  getCsvData,
};
