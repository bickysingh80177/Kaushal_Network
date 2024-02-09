const catchAsyncError = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const model = require("../models/userModels");
const { setToken } = require("../utils/jwtToken");

const User = model.userModel;

// user registration
const userRegistration = catchAsyncError(async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const enterprise_type = req.body.enterprise_type;
  const entity_type = req.body.entity_type;
  const trade_name = req.body.trade_name;
  const trade_number = req.body.trade_number;
  const brand_names = req.body.brand_names;
  const office_address = req.body.office_address;
  const office_city = req.body.office_city;
  const office_state = req.body.office_state;
  const office_country = req.body.office_country;
  const office_zip_code = req.body.office_zip_code;
  const branch_address = req.body.branch_address;
  const branch_city = req.body.branch_city;
  const branch_state = req.body.branch_state;
  const branch_country = req.body.branch_country;
  const branch_zip_code = req.body.branch_zip_code;
  // const cin_llp_cin = req.body.cin_llp_cin;
  const pan_number = req.body.pan_number;
  // const pan_file = req.body.pan_file;
  const gst_number = req.body.gst_number;
  // const gst_file = req.body.gst_file;
  const msme_reg_number = req.body.msme_reg_number;
  // const trade_liscence_file = req.body.trade_liscence_file;
  // const iec = req.body.iec;
  const business_sector = req.body.business_sector;
});
