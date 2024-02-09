// creating a new jwt token and storing it into a cookie

const setToken = (user, statusCode, res) => {
  const token = user.getJWTtoken();

  //   options for token generation
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

exports.setToken = setToken;
