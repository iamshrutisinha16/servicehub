const User = require("../models/User");


// CREATE USER
const createUser = async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: newUser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// LOGIN USER
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Validation
    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and Password required",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check Password
    if (user.password !== password) {

      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Success
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};