const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { required: true ,type: String },
  last_name: { required: true ,type: String},
  username: { required: true ,type: String, unique: true },
  password: { required: true ,type: String },
  created_at: {type: Date , default: Date.now},
  contacts: [{
    required: true ,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact"
  }],
  token: {type: String }
});

module.exports = mongoose.model("User", userSchema);