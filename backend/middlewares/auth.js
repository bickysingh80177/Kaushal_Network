const jwt = require("jsonwebtoken");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./asyncErrors");
const model = require("../models/userModels");

const User = model.userModel;

// middleware for authenticating the users
exports.isUserAuthenticated = catchAsyncError(async (req, res, next) => {
  // const { token } = req.cookies;
  const userId = req.headers["authorization"];
  const token = userId.split(" ")[1];

  if (!token) {
    next(new ErrorHandler("Please login to acces this resource.", 401));
  }

  const secret = process.env.JWT_SECRET;
  const decodedData = jwt.verify(token, secret);
  req.user = await User.findById(decodedData.id);

  next();
});
