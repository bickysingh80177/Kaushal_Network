const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = new mongoose.Schema({
  user_type: {
    type: String,
    required: [true, "Please select your user type"],
  },
  other_user_type: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please enter your user name"],
    minLength: [5, "Name should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  email: {
    type: String,
    // unique: true,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should be at least of 8 characters"],
    select: false,
  },
});

// password encryption before saving
userModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt_rounds = Number(process.env.SALT);
  const salt = bcrypt.genSaltSync(salt_rounds);
  this.password = await bcrypt.hashSync(this.password, salt);
});

// comparing password
userModel.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userModel.methods.getJWTtoken = async function () {
  const secret = process.env.JWT_SECRET;
  const expiry_time = process.env.JWT_EXPIRE;
  return jwt.sign({ id: this._id }, secret, { expiresIn: expiry_time });
};

exports.userModel = mongoose.model("User", userModel);
