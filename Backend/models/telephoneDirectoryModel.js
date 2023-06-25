var mongoose = require("mongoose");

var telephoneDirectorySchema = mongoose.Schema({
  telephone_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  department: {
    type: String,
  },
  phone: {
    type: Number,
  },
  area: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const TelephoneDirectory = mongoose.model(
  "TelephoneDirectory",
  telephoneDirectorySchema
);
module.exports = TelephoneDirectory;
