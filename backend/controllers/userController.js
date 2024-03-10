const catchAsyncError = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const model = require("../models/userModel");
const { setToken } = require("../utils/jwtToken");

const User = model.userModel;

const userRegistration = catchAsyncError(async (req, res, next) => {
  const user_type = req.body.user_type;
  const other_user_type = req.body?.other_user_type;
  const name = req.body.user_name;
  const email = req.body.user_email;
  const password = req.body.user_password;

  const user = await User.create({
    user_type,
    other_user_type,
    name,
    email,
    password,
  });

  setToken(user, 201, res);
});

exports.userController = { userRegistration };
