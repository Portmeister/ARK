const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arkSchema = new Schema({
  userFirst: { type: String, required: true },
  userLast: { type: String, required: true },
  userPhone: { type: Number, required: true}, 
  userEmail: { type: String, required: true },
  userLocation: { type: String, required: true },
  serviceSynopsis: String,
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const Ark = mongoose.model("Ark", arkSchema);

module.exports = Ark;
