const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [5, "Name should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should be at least of 8 characters"],
    select: false,
  },
  phone: {
    type: Number,
    required: [true, "Please enter your phone number"],
    minLength: [10, "Phone number should be at least of 10 characters"],
    maxLength: [10, "Phone number should be at least of 10 characters"],
    validate: [validator.isMobilePhone, "Please enter a valid phone number"],
  },
  enterprise_type: {
    type: Number,
    required: [true, "Please select your enterprise type"],
  },
  entity_type: {
    type: Number,
    required: [true, "Please select your entity type"],
  },
  trade_name: {
    type: String,
    required: [true, "Please enter your trade name"],
    minLength: [5, "Trade name should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  trade_number: {
    type: Number,
    required: [true, "Please enter your trade number"],
    minLength: [5, "Trade number should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  brand_names: {
    type: [String],
    required: [true, "Please enter your brand names"],
  },
  office_address: {
    type: String,
    required: [true, "Please enter your office address"],
    minLength: [5, "Office address should be at least of 5 characters"],
    maxLength: [150, "Maximum length of 50 characters allowed"],
  },
  office_city: {
    type: String,
    required: [true, "Please enter your office city"],
    minLength: [5, "Office city should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  office_state: {
    type: String,
    required: [true, "Please enter your office state"],
    minLength: [5, "Office state should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  office_country: {
    type: String,
    required: [true, "Please enter your office country"],
    minLength: [5, "Office country should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  office_zip_code: {
    type: Number,
    required: [true, "Please enter your office zip code"],
    min: [5, "Branch zip code should be of 5 characters"],
    max: [5, "Branch zip code should be of 5 characters"],
  },
  branch_address: {
    type: String,
    required: [true, "Please enter your branch address"],
    minLength: [5, "Branch address should be at least of 5 characters"],
    maxLength: [150, "Maximum length of 50 characters allowed"],
  },
  branch_city: {
    type: String,
    required: [true, "Please enter your branch city"],
    minLength: [5, "Branch city should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  branch_state: {
    type: String,
    required: [true, "Please enter your branch state"],
    minLength: [5, "Branch state should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  branch_country: {
    type: String,
    required: [true, "Please enter your branch country"],
    minLength: [5, "Office country should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  branch_zip_code: {
    type: Number,
    required: [true, "Please enter your branch zip code"],
    min: [5, "Branch zip code should be of 5 characters"],
    max: [5, "Branch zip code should be of 5 characters"],
  },
  //   cin_llp_cin: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  pan_number: {
    type: String,
    required: [true, "Please enter your pan number"],
    minLength: [10, "Pan number should be of 10 characters"],
    maxLength: [10, "Pan number should be of 10 characters"],
  },
  //   pan_file: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  gst_number: {
    type: String,
    required: [true, "Please enter your gst number"],
    minLength: [15, "Gst number should be of 15 characters"],
    maxLength: [15, "Gst number should be of 15 characters"],
  },
  //   gst_file: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  msme_reg_number: {
    type: String,
    required: [true, "Please enter your msme reg number"],
    minLength: [16, "Msme reg number should be of 16 characters"],
    maxLength: [16, "Msme reg number should be of 16 characters"],
  },
  //   trade_liscence_file: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  //   iec: {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  business_sector: {
    type: String,
    required: [true, "Please enter your business sector"],
    minLength: [5, "Business sector should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
});

// password encryption before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt_rounds = process.env.SALT;
  const salt = bcrypt.genSaltSync(salt_rounds);
  this.password = await bcrypt.hashSync(this.password, salt);
});

// comparing password
userSchema.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getJWTtoken = async function () {
  const secret = process.env.JWT_SECRET;
  const expiry_time = process.env.JWT_EXPIRE;
  return jwt.sign({ id: this._id }, secret, { expiresIn: expiry_time });
};

exports.userModel = mongoose.model("User", userSchema);
