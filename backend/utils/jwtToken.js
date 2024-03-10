// creating a new jwt token and storing it into a cookie

const sendToken = async (user, statusCode, res) => {
  const token = await user.getJWTtoken();

  //   options for token generation
  const options = {
    expiresIn: new Date(
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

exports.setToken = sendToken;
