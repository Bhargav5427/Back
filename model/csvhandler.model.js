const mongoose = require("mongoose");

let csvHandlerSchema = new mongoose.Schema(
  {
    data: {
      type: mongoose.Schema.Types.Mixed, 
    },
  },
  { strict: false } 
);

let csvfileData = mongoose.model("CsvFileData", csvHandlerSchema);

module.exports = csvfileData;
