const mongoose = require("mongoose");

const createDynamicSchema = (fields) => {
  const schemaFields = {};

  fields.forEach((field) => {
    schemaFields[field] = { type: String }; 
  });

  return new mongoose.Schema(schemaFields, { strict: false });
};

const createDynamicModel = (fields) => {
  const modelName = "DynamicCsvData"; 

  if (mongoose.models[modelName]) {
    return mongoose.models[modelName]; 
  } else {
    const dynamicSchema = createDynamicSchema(fields);
    return mongoose.model(modelName, dynamicSchema);
  }
};

module.exports = { createDynamicModel };
