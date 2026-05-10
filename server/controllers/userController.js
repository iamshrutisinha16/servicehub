const User = require("../models/User");

const createUser = async (req, res) => {
  try {

    const { name, phone, role } = req.body;

    const newUser = new User({
      name,
      phone,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Created",
      newUser,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};



// LOGIN USER

const loginUser = async (req, res) => {

  try {

    const { phone } = req.body;

    const user = await User.findOne({ phone });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};