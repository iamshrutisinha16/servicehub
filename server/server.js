const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "https://servicehub-three.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ROUTES
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/users", userRoutes);

app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("ServiceHub Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});