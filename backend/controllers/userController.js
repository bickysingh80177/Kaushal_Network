const catchAsyncError = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const model = require("../models/userModel");
const { setToken } = require("../utils/jwtToken");
const Errorhandler = require("../utils/errorHandler");

const User = model.userModel;

const userRegistration = catchAsyncError(async (req, res, next) => {
  try {
    const user_type = req.body.user_type;
    const other_user_type = req.body?.other_user_type;
    const name = req.body.user_name;
    const email = req.body.user_email;
    const password = req.body.user_password;

    const user = new User({
      user_type,
      other_user_type,
      name,
      email,
      password,
    });
    user.save();

    setToken(user, 201, res);
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
});

const userLogin = catchAsyncError(async (req, res, next) => {
  try {
    // const user_type = req.body.user_type;
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;

    if (!user_email || !user_password) {
      return res
        .status(400)
        .json({ success: false, err: "Please enter Email and Password" });
    }
    const user = await User.findOne({
      // user_type: user_type,
      email: user_email,
    });

    if (!user) {
      return res
        .status(40)
        .json({ success: false, err: "Invalid Email or Password" });
    }

    const checkPassword = await user.comparePassword(user_password);
    if (user && checkPassword) {
      const token = await user.getJWTtoken();

      //   options for token generation
      const options = {
        expiresIn: new Date(
          Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({
        success: true,
        user,
        token,
        msg: "Logged in successfully",
      });
      // setToken(user, 200, res);
    } else {
      return res
        .status(401)
        .json({ success: false, err: "Invalid Email or Password" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, err: err.message });
  }
});

exports.userController = { userRegistration, userLogin };
