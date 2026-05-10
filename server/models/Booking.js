const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
 customerName: String,
  service: String,
  address: String,
  date: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);