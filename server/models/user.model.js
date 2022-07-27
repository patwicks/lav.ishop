const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String },
  address: {
    house_number: { type: String },
    street: { type: String },
    barangay: { type: String },
    city_municipality: { type: String },
    province: { type: String },
    zipcode: { type: String },
  },
});

module.exports = mongoose.model("User", userSchema);
