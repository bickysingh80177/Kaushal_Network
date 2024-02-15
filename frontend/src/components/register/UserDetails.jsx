import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/images/logo.svg";
import Navbar from "../section/Navbar";
import InputBox from "../common/input/InputBox";
import SelectBox from "../common/input/SelectBox";
import {
  businessInvOptions,
  empCntOptions,
  enterpriseOptions,
  entityOptions,
  industryOptions,
  sectorOptions,
} from "../../constants/constantOptions";
import Footer from "../section/Footer";

const UserDetails = ({ data = {} }) => {
  const initialFormState = {
    // Enterprise details
    trade_name: "",
    legal_name: "",
    logo: "",
    brand_names: [],
    entity_type: "",
    incorportion_year: "",
    reg_office_add: "",
    reg_office_city: "",
    reg_office_state: "",
    reg_office_contry: "",
    branch_address: "", // optional
    website_link: "", // optional

    // about products and services
    buss_involved: "",
    goods_names: [],
    service_names: [],
    other_names: [],
    business_sector: "",
    industry_type: "",
    emp_number: "",
    exp_years: "",

    // contact details
    contact_details: [],

    // statutory details
    msme_reg_number: "",
    msme_reg_number_file: "",
    cin_llp_cin: "",
    cin_llp_cin_file: "",
    pan_number: "",
    pan_file: "",
    gst_number: "",
    gst_file: "",
    trade_liscence_number: "",
    trade_liscence_file: "",
    iec_number: "",
    iec_number_file: "",
    aadhar_number: "",
    aadhar_number_file: "",
    other_details: [],
  };

  const initialContactForm = {
    cont_name: "",
    cont_desig: "",
    cont_email: "",
    cont_phone: "",
  };

  const otherDocDetailForm = {
    other_name: "",
    other_file: "",
  };

  const [user_details, setUser_details] = useState(initialFormState);
  const [contactPerson, setContactPerson] = useState(initialContactForm);
  const [otherDetails, setOtherDetails] = useState(otherDocDetailForm);
  const [brand_name, setBrand_name] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  const handleAddContact = () => {
    console.log(contactPerson);
  };

  const handleAddBrand = () => {
    console.log(user_details.brand_names.length);
    user_details.brand_names.push(brand_name);
    setBrand_name("");
  };

  const renderContactSection = () => {};

  const renderOtherDocsSection = () => {};

  const renderBrandSection = () => {
    return (
      <div className="sub-section">
        {user_details.brand_names?.map((item, index) => {
          return (
            <div className="mt-4" key={item + index}>
              <InputBox label="Brand Names" value={item} />
            </div>
          );
        })}
        {user_details.brand_names?.length <= 9 ? (
          <div className="mt-4 flex justify-between gap-5">
            <div className="w-full">
              <InputBox
                label="Brand Name"
                placeholder="Enter your legal name..."
                value={brand_name}
                handleInputChange={(e) => setBrand_name(e.target.value)}
              />
            </div>
            <span
              className="pt-8 cursor-pointer addBrand-btn"
              onClick={handleAddBrand}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-slate-50">
      <div className="w-full scale-[0.3] h-48 mt-[-3rem]">
        <img src={logo} alt="logo" className="m-auto" />
      </div>
      <h3 className="text-center font-bold text-violet-700 font-serif">
        Connecting Growth <br /> Begin your Growth Journey
      </h3>
      <div className="flex justify-center items-start gap-56">
        <div className="flex flex-col gap-8 fixed left-24 top-64 font-bold">
          <span className="cursor-pointer">Enterprise details</span>
          <span className="cursor-pointer">About Products and Services</span>
          <span className="cursor-pointer">Contact details</span>
          <span className="cursor-pointer">Statutory Details</span>
        </div>
        <div className="xs:mx-4 lg:flex lg:flex-col lg:items-center lg:mx-12 rounded-md">
          <div className="xs:pt-5 xs:px-2 lg:w-[40rem] lg:px-10 lg:pt-10 pb-5 m-3 rounded-md lg:shadow-md">
            <div>
              <InputBox
                label="Trade Name"
                value={data.trade_name}
                placeholder="Enter your trade name..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    trade_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Legal Name"
                value={data.legal_name}
                placeholder="Enter your legal name..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    legal_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="Logo"
                value={user_details.logo}
                handleInputChange={(e) =>
                  setUser_details({ ...user_details, logo: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <SelectBox
                label="Entity Type"
                value={user_details.entity_type}
                options={entityOptions}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    entity_type: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Incorporation Year"
                value={user_details.incorportion_year}
                placeholder="Enter your trade name..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    incorportion_year: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Registered Office Addresss"
                value={user_details.reg_office_add}
                placeholder="Enter your registered office address..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    reg_office_add: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Registered Office City"
                value={user_details.reg_office_city}
                placeholder="Enter your registered office city..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    reg_office_city: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Registered Office State"
                value={user_details.reg_office_state}
                placeholder="Enter your registered office state..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    reg_office_state: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Registered Office Country"
                value={user_details.reg_office_contry}
                placeholder="Enter your registered office country..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    reg_office_contry: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Branch Adderess (optional)"
                value={user_details.branch_address}
                placeholder="Enter your branch address..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    branch_address: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Website (optional)"
                value={user_details.website_link}
                placeholder="Enter your website link..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    website_link: e.target.value,
                  })
                }
              />
            </div>
            {/* <div className="mt-4"> */}
            {renderBrandSection()}
            {/* <InputBox
                label="Brand Names"
                placeholder="Enter your legal name..."
                // value={user_details.phone}
                // handleInputChange={(e) =>
                //   setUser_details({ ...user_details, logo: e.target.value })
                // }
              /> */}
            {/* </div> */}
          </div>
          <div className="xs:pt-5 xs:px-2 lg:w-[40rem] lg:px-10 lg:pt-10 pb-5 m-3 rounded-md lg:shadow-md">
            <div>
              <SelectBox
                label="Business Involvement"
                value={user_details.buss_involved}
                options={businessInvOptions}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    buss_involved: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Name of Goods"
                value={user_details.goods_names}
                placeholder="Enter your office goods_names..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    goods_names: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Name of Services"
                value={user_details.service_names}
                placeholder="Enter your office state..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    service_names: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Name of other businesses"
                value={user_details.other_names}
                placeholder="Enter your office zip code..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    other_names: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <SelectBox
                label="Business Sectors"
                value={user_details.business_sector}
                options={sectorOptions}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    business_sector: e.target.value,
                  })
                }
              />
            </div>

            <div className="mt-4">
              <SelectBox
                label="Industry Type"
                value={user_details.branch_address}
                options={industryOptions}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    branch_address: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <SelectBox
                label="Number of Employees"
                value={user_details.emp_number}
                options={empCntOptions}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    emp_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Experience (in years)"
                value={user_details.exp_years}
                placeholder="Enter your branch state..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    exp_years: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="xs:pt-5 xs:px-2 lg:w-[40rem] lg:px-10 lg:pt-10 pb-5 m-3 rounded-md lg:shadow-md">
            {renderContactSection()}
            {/* {user_details?.contact_details?.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <InputBox
                      label="Contact Name"
                      value={item.cont_name}
                      placeholder="Enter your contact name..."
                    />
                  </div>
                  <div className="mt-4">
                    <InputBox
                      label="Contact Designation"
                      value={item.cont_desig}
                      placeholder="Enter your contact designation..."
                    />
                  </div>
                  <div className="mt-4">
                    <InputBox
                      label="Contact Email"
                      value={item.cont_email}
                      placeholder="Enter your contact email..."
                    />
                  </div>
                  <div className="mt-4">
                    <InputBox
                      label="Contact Phone"
                      value={item.cont_phone}
                      placeholder="Enter your contact phone..."
                    />
                  </div>
                </div>
              );
            })}
            <div>
              <InputBox
                label="Contact Name"
                value={contactPerson.cont_name}
                placeholder="Enter your contact name..."
                handleInputChange={(e) =>
                  setContactPerson({
                    ...contactPerson,
                    cont_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Contact Designation"
                value={contactPerson.cont_desig}
                placeholder="Enter your contact designation..."
                handleInputChange={(e) =>
                  setContactPerson({
                    ...contactPerson,
                    cont_desig: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Contact Email"
                value={contactPerson.cont_email}
                placeholder="Enter your contact email..."
                handleInputChange={(e) =>
                  setContactPerson({
                    ...contactPerson,
                    cont_email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Contact Phone"
                value={contactPerson.cont_phone}
                placeholder="Enter your contact phone..."
                handleInputChange={(e) =>
                  setContactPerson({
                    ...contactPerson,
                    cont_phone: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                className="bg-[#253974] text-white rounded-md px-4 py-2 text-sm p-auto hover:bg-[#3E63DD] lg:w-[8rem]"
                onClick={handleAddContact}
              >
                Add More
              </button>
            </div> */}
          </div>
          <div className="xs:pt-5 xs:px-2 lg:w-[40rem] lg:px-10 lg:pt-10 pb-5 m-3 rounded-md lg:shadow-md">
            <div>
              <InputBox
                label="MSME Reg. No."
                value={user_details.msme_reg_number}
                placeholder="Enter your msme reg. no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    msme_reg_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="MSME Reg. File"
                value={user_details.msme_reg_number}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    msme_reg_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="CIN/ LLP-CIN"
                value={user_details.cin_llp_cin}
                placeholder="Enter your CIN/ LLP-CIN..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    cin_llp_cin: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="CIN/ LLP-CIN"
                value={user_details.cin_llp_cin_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    cin_llp_cin: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Pan No."
                value={user_details.pan_number}
                placeholder="Enter your pan no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    pan_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="Pan File"
                value={user_details.pan_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    pan_file: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="GSTIN No."
                value={user_details.gst_number}
                placeholder="Enter your gst no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    gst_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="GSTIN File"
                value={user_details.gst_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    gst_file: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Trade Licence No"
                value={user_details.trade_liscence_number}
                placeholder="Enter your gst no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    trade_liscence_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="Trade Licence File"
                value={user_details.trade_liscence_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    trade_liscence_file: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="IEC No"
                value={user_details.iec_number}
                placeholder="Enter your IEC no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    iec_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="IEC File"
                value={user_details.iec_number_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    iec_number_file: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                label="Aadhar Number"
                value={user_details.aadhar_number}
                placeholder="Enter your gst no..."
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    aadhar_number: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <InputBox
                type="file"
                label="Aadhar File"
                value={user_details.aadhar_number_file}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    aadhar_number_file: e.target.value,
                  })
                }
              />
            </div>

            {/* <div className="mt-4">
              {renderOtherDocsSection()}
              <InputBox
                label="Other Documents"
                value={user_details.business_sector}
                handleInputChange={(e) =>
                  setUser_details({
                    ...user_details,
                    business_sector: e.target.value,
                  })
                }
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-3 mb-16">
        <button className="bg-[#253974] text-white rounded-md px-4 py-2 text-sm p-auto hover:bg-[#3E63DD] lg:w-[12rem]">
          Submit
        </button>
      </div>
      <Footer />
    </form>
  );
};

export default UserDetails;
