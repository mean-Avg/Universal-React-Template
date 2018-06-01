const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testSchema = new Schema(
  {
    test: String,
  },
  //adding option {timestamps: true}automatically sets createdAt and updatedAt values on the model in your mongo database
  //,{ timestamps: true }
);

module.exports = mongoose.model('Test', testSchema);
