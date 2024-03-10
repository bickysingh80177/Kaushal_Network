const catchAsyncError = require("../middlewares/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const model = require("../models/userProfileModel");

const UserProfile = model.userModel;

const userProfile = catchAsyncError(async (req, res, next) => {
  // Enterprise Details
  const trade_name = req.body.trade_name;
  const legal_name = req.body.legal_name;
  const brand_names = req.body.brand_names;
  const entity_type = req.body.entity_type;
  const incorportion_year = req.body.incorportion_year;
  const reg_office_add = req.body.reg_office_add;
  const reg_office_pincode = req.body.reg_office_pincode;
  const reg_office_city = req.body.reg_office_city;
  const reg_office_state = req.body.reg_office_state;
  const reg_office_contry = req.body.reg_office_contry;
  const branch_address = req.body.branch_address;
  const website_link = req.body.website_link;
  const goods_names = req.body.goods_names;
  const business_sector = req.body.business_sector;
  const other_business_sector = req.body.other_business_sector;
  const industry_type = req.body.industry_type;
  const other_industry_type = req.body.other_industry_type;
  const emp_number = req.body.emp_number;
  const contact_details = req.body.contact_details;
  const msme_reg_number = req.body.msme_reg_number;
  const cin_llp_cin = req.body.cin_llp_cin;
  const pan_number = req.body.pan_number;
  const gst_number = req.body.gst_number;
  const trade_liscence_number = req.body.trade_liscence_number;
  const iec_number = req.body.iec_number;
  const aadhar_number = req.body.aadhar_number;
  const enterprise_type = req.body.enterprise_type;
  const trade_number = req.body.trade_number;
  const office_address = req.body.office_address;
  const office_city = req.body.office_city;
  const office_state = req.body.office_state;
  const office_country = req.body.office_country;
  const office_zip_code = req.body.office_zip_code;

  const userProfile = await UserProfile.create({
    trade_name,
    legal_name,
    brand_names,
    entity_type,
    incorportion_year,
    reg_office_add,
    reg_office_pincode,
    reg_office_city,
    reg_office_state,
    reg_office_contry,
    branch_address,
    website_link,
    goods_names,
    business_sector,
    other_business_sector,
    industry_type,
    other_industry_type,
    emp_number,
    contact_details,
    msme_reg_number,
    cin_llp_cin,
    pan_number,
    gst_number,
    trade_liscence_number,
    iec_number,
    aadhar_number,
    enterprise_type,
    trade_number,
    office_address,
    office_city,
    office_state,
    office_country,
    office_zip_code,
  });
});

exports.userProfileController = { userProfile };
