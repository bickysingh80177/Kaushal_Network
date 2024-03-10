const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
// const { default: isEmail } = require("validator/lib/isemail");

const userProfileSchema = new mongoose.Schema({
  trade_name: {
    type: String,
    required: [true, "Please enter your trade name"],
    minLength: [5, "Trade name should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  legal_name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [5, "Name should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  // logo: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  brand_names: {
    type: [String],
    required: [true, "Please enter your brand names"],
  },
  entity_type: {
    type: Number,
    required: [true, "Please select your entity type"],
  },
  incorportion_year: {
    type: Date,
    required: [true, "Please enter your incorporation year"],
  },
  reg_office_add: {
    type: String,
    required: [true, "Please enter your office address"],
    minLength: [5, "Office address should be at least of 5 characters"],
    maxLength: [150, "Maximum length of 50 characters allowed"],
  },
  reg_office_pincode: {
    type: Number,
    required: [true, "Please enter your office pincode"],
    minLength: [0, "Please enter a valid office pincode"],
    maxLength: [999999, "Please enter a valid office pincode"],
  },
  reg_office_city: {
    type: String,
    required: [true, "Please enter your office city"],
    minLength: [5, "Office city should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  reg_office_state: {
    type: String,
    required: [true, "Please enter your office state"],
    minLength: [5, "Office state should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  reg_office_contry: {
    type: String,
    required: [true, "Please enter your office country"],
    minLength: [5, "Office country should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
  },
  branch_address: {
    type: String,
    minLength: [5, "Branch address should be at least of 5 characters"],
    maxLength: [150, "Maximum length of 50 characters allowed"],
  },
  website_link: {
    type: String,
  },
  goods_names: {
    type: [String],
  },
  service_names: {
    type: [String],
  },
  business_sector: {
    type: Number,
    required: [true, "Please specify your business sector"],
  },
  other_business_sector: {
    type: String,
  },
  industry_type: {
    type: Number,
    required: [true, "Please specify your Industry type"],
  },
  other_industry_type: {
    type: Number,
  },
  emp_number: {
    type: Number,
    required: [true, "Please specify employee count"],
  },
  contact_details: [
    {
      cont_name: {
        type: String,
        required: [true, "Please enter the contact name"],
      },
      cont_desig: {
        type: String,
        required: [true, "Please enter the contact's designation"],
      },
      cont_email: {
        type: String,
        validate: [validator.isEmail, "invalid email"],
      },
      cont_phone: {
        type: Number,
        validate: {
          validator: function (v) {
            return /d{10}/.test(v);
          },
          message: "Enter a valida phone number!",
        },
      },
    },
  ],
  msme_reg_number: {
    type: String,
    required: [true, "Please enter your msme reg number"],
    minLength: [16, "Msme reg number should be of 16 characters"],
    maxLength: [16, "Msme reg number should be of 16 characters"],
  },
  // msme_reg_number_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  cin_llp_cin: {
    type: String,
    required: [true, "Please enter your msme reg number"],
    minLength: [16, "Msme reg number should be of 16 characters"],
    maxLength: [16, "Msme reg number should be of 16 characters"],
  },
  // cin_llp_cin_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  pan_number: {
    type: String,
    required: [true, "Please enter your pan number"],
    minLength: [10, "Pan number should be of 10 characters"],
    maxLength: [10, "Pan number should be of 10 characters"],
  },
  // pan_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  gst_number: {
    type: String,
    required: [true, "Please enter your gst number"],
    minLength: [15, "Gst number should be of 15 characters"],
    maxLength: [15, "Gst number should be of 15 characters"],
  },
  // gst_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  trade_liscence_number: {
    type: Number,
    required: [true, "Please enter your trade license number"],
  },
  // trade_liscence_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  iec_number: {
    type: Number,
    required: [true, "Please enter IEC Number"],
  },
  // iec_number_file: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  aadhar_number: {
    type: Number,
    required: [true, "Please enter aadhar Number"],
    min: [0, "Please enter correct aadhar Number"],
    max: [9999999999999999, "Please enter correct aadhar number"],
  },
  enterprise_type: {
    type: Number,
    required: [true, "Please select your enterprise type"],
  },

  trade_number: {
    type: Number,
    required: [true, "Please enter your trade number"],
    minLength: [5, "Trade number should be at least of 5 characters"],
    maxLength: [50, "Maximum length of 50 characters allowed"],
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
});

exports.userModel = mongoose.model("UserProfile", userProfileSchema);
