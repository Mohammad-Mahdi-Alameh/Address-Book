const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  first_name: { required: true , type: String },
  last_name: { required: true , type: String},
  phonenumber: { required: true , type: String },
  email: { required: true , type: String },
  relationship_status: { required: true , type: String },
  location : { latitude :{ required: true , type: String } , longitude :{ required: true , type: String }},
  user: {
    required: true ,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  created_at: {type: Date , default: Date.now}
});

module.exports = mongoose.model("Contact", contactSchema);