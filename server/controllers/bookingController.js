const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {

    const {
      customerName,
      service,
      address,
      date,
    } = req.body;

    const newBooking = new Booking({
      customerName,
      service,
      address,
      date,
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking Created",
      newBooking,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find();

    res.status(200).json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
};