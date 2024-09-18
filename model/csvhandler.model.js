let mongoose = require("mongoose");

let csvHandlerSchema = new mongoose.Schema({
  Year: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
});

let csvfileData = mongoose.model("csvHandlerSchema", csvHandlerSchema);

module.exports = csvfileData;
