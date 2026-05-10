const Booking = require("../models/Booking");


// CREATE BOOKING

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
      status: "Pending",
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking Created Successfully",
      booking: newBooking,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};




// GET ALL BOOKINGS

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




// UPDATE STATUS

const updateBookingStatus = async (req, res) => {

  try {

    const { id } = req.params;

    const { status } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Booking Status Updated",
      booking: updatedBooking,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
};