const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error oocured";

  //   wrong mongo id error
  if (err.name === "CastError") {
    const message = `Resouce not found, Invalid ${err.path}`;
    new ErrorHandler(message, 400);
  }

  //   mongoose duplicate key error
  if (err.name === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered!`;
    new ErrorHandler(message, 400);
  }

  // invalid JWT token error
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token, try log in again!`;
    new ErrorHandler(message, 401);
  }

  //   expired JWT token error
  if (err.name === "TokenExpiredError") {
    const message = `Token has expired, try log in again!`;
    new ErrorHandler(message, 401);
  }

  //   console.log(err.stack);   // prints the whole error stack

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
