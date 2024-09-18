const { csvHandlerSchema } = require("../model");

let uploadCsvFileData = (body) => {
  return csvHandlerSchema.insertMany(body);
};

let getCsvFileData = () => {
  return csvHandlerSchema.find();
};
module.exports = {
  uploadCsvFileData,
  getCsvFileData,
};
