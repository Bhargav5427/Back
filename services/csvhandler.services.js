const { createDynamicModel } = require("../model/path_to_dynamic_model");

let uploadCsvFileData = async (jsonArray) => {
  try {
    const csvFields = Object.keys(jsonArray[0]);

    const DynamicModel = createDynamicModel(csvFields);

    const result = await DynamicModel.insertMany(jsonArray);

    return result;
  } catch (error) {
    throw new Error(`Failed to upload CSV data: ${error.message}`);
  }
};

let getCsvFileData = async () => {
  try {
    const DynamicModel = createDynamicModel([]);

    return await DynamicModel.find();
  } catch (error) {
    throw new Error(`Failed to fetch CSV data: ${error.message}`);
  }
};

module.exports = {
  uploadCsvFileData,

  getCsvFileData,
};
