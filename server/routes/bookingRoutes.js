const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  updateBookingStatus,
} = require("../controllers/bookingController");

router.post("/create", createBooking);

router.get("/", getBookings);

router.patch("/:id", updateBookingStatus);

module.exports = router;