import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import Navbar from "../section/Navbar";
import InputBox from "../common/input/InputBox";

const UserDetails = ({ data = {} }) => {
  const initialFormState = {
    name: "",
    email: "",
    etr_type: "",
    entity_type: "",
    trade_name: "",
    leg_name: "",
    brand_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    brn_address: "",
    brn_city: "",
    brn_state: "",
    brn_zip: "",
    brn_country: "",
    cin_llp_cin: "",
    pan_no: "",
    pan_file: "",
    gst_no: "",
    gst_file: "",
    msme_reg_no: "", // only for MSME registration
    trade_lisc: "",
    iec: "",
    bsn_sector: "",
  };

  const [user_details, setUser_details] = useState(initialFormState);
  //   console.log(data);

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full scale-[0.3] h-48 mt-[-2rem]">
        <img src={logo} alt="logo" className="m-auto" />
      </div>
      <div className="flex flex-row mx-12">
        <div className="h-screen w-1/2 px-20 mt-20 py-20 bg-slate-50">
          <div>
            <InputBox
              label="Name"
              value={data.user_name}
              placeholder="Enter your name..."
              // handleInputChange={(e) =>
              //   setUser_details({ ...user_details, user_name: e.target.value })
              // }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Email"
              value={data.user_email}
              placeholder="Enter your email..."
              // handleInputChange={(e) =>
              //   setUser_details({ ...user_details, user_name: e.target.value })
              // }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Phone"
              value={user_details.phone}
              placeholder="Enter your phone number..."
              handleInputChange={(e) =>
                setUser_details({ ...user_details, phone: e.target.value })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Phone"
              value={user_details.phone}
              placeholder="Enter your phone number..."
              handleInputChange={(e) =>
                setUser_details({ ...user_details, phone: e.target.value })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Enterprise Type"
              value={data.user_type}
              placeholder="Enter your phone number..."
              //   handleInputChange={(e) =>
              //     setUser_details({ ...user_details, phone: e.target.value })
              //   }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Entity Type"
              value={user_details.entity_type}
              placeholder="Enter your phone number..."
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
              label="Trade Name"
              value={user_details.trade_name}
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
              label="Trade number"
              value={user_details.leg_name}
              placeholder="Enter your legal name..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  leg_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Brand Names"
              value={user_details.brand_name}
              placeholder="Enter your brand names..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="h-screen w-1/2 px-20 mt-20 py-20 bg-slate-50">
          <div>
            <InputBox
              label="Office Address"
              value={user_details.address}
              placeholder="Enter your office address..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Office City"
              value={user_details.city}
              placeholder="Enter your office city..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Office State"
              value={user_details.state}
              placeholder="Enter your office state..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Office Zip Code"
              value={user_details.zip}
              placeholder="Enter your office zip code..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Office Country"
              value={user_details.country}
              placeholder="Enter your office country..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>

          <div className="mt-4">
            <InputBox
              label="Branch Address"
              value={user_details.brn_address}
              placeholder="Enter your branch address..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Branch City"
              value={user_details.brn_city}
              placeholder="Enter your branch city..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Branch State"
              value={user_details.brn_state}
              placeholder="Enter your branch state..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Branch Country"
              value={user_details.brn_country}
              placeholder="Enter your branch country..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Branch Zip Code"
              value={user_details.brn_zip}
              placeholder="Enter your branch zip..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="h-screen w-1/2 px-20 mt-20 py-20 bg-slate-50">
          <div>
            <InputBox
              label="CIN/ LLP-CIN"
              value={user_details.cin_llp_cin}
              placeholder="Enter your CIN/ LLP-CIN..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Pan No."
              value={user_details.pan_no}
              placeholder="Enter your pan no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Pan File"
              value={user_details.pan_file}
              placeholder="Enter your office zip code..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="GST No."
              value={user_details.gst_no}
              placeholder="Enter your gst no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="GST File"
              value={user_details.gst_file}
              placeholder="Enter your gst no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="MSME Reg. No."
              value={user_details.msme_reg_no}
              placeholder="Enter your msme reg. no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Trade Licence"
              value={user_details.trade_lisc}
              placeholder="Enter your gst no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="IEC"
              value={user_details.iec}
              placeholder="Enter your gst no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Business Sector"
              value={user_details.bsn_sector}
              placeholder="Enter your gst no..."
              handleInputChange={(e) =>
                setUser_details({
                  ...user_details,
                  brand_name: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
