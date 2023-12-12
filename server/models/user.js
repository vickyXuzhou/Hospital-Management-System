const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const EmployeeModel = mongoose.model("register", UserSchema);
module.exports = EmployeeModel;
