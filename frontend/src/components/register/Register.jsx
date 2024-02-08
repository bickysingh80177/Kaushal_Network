import React, { useState } from "react";
import { toast } from "react-toastify";
import register_art from "../assets/images/Register_art.svg";
import logo from "../assets/images/logo.svg";
import RadioButton from "../common/input/RadioButton";
import { Link, useNavigate } from "react-router-dom";
import { enterpriseOptions } from "../../constants/constantOptions";
import InputBox from "../common/input/InputBox";

const Register = () => {
  const initialFormState = {
    user_type: "",
    other_user_type: "",
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_cnf: "",
  };
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.user_password !== registerData.user_password_cnf) {
      toast.warning("Passwords do not match");
    }
    navigate("/register/user_details", {
      data: registerData,
    });
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-col-2 h-screen">
      <div className="w-full hidden lg:flex lg:justify-center lg:items-center bg-[#d8b4fe]">
        <img src={register_art} alt="Login art" className="p-28" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center bg-[#fdfdfc]"
      >
        <div className="flex justify-center items-center flex-col w-full bg-[#ffffff3d] ">
          <div className="w-32 mb-8">
            <img src={logo} alt="logo" />
          </div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Type of Enterprise
          </h3>
          <div className="">
            <RadioButton
              value={registerData.user_type}
              name="user_type"
              options={enterpriseOptions}
              handleInputChange={(e) =>
                setRegisterData({ ...registerData, user_type: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col bg-[#abb9ff1a] p-3 rounded-md mt-4 lg:w-[25rem] w-[17rem]">
            <InputBox
              label="Name of Business"
              value={registerData.user_name}
              placeholder="Enter your business name..."
              handleInputChange={(e) =>
                setRegisterData({ ...registerData, user_name: e.target.value })
              }
            />
            {registerData.user_type === "other" && (
              <InputBox
                type="password"
                label="Specify your business type"
                value={registerData.other_user_type}
                placeholder="Enter your business type..."
                handleInputChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    other_user_type: e.target.value,
                  })
                }
              />
            )}
            <InputBox
              label="Email"
              value={registerData.user_email}
              placeholder="Enter your email..."
              handleInputChange={(e) =>
                setRegisterData({ ...registerData, user_email: e.target.value })
              }
            />
            <InputBox
              type="password"
              label="Create Your Password"
              value={registerData.user_password}
              placeholder="Enter your password..."
              handleInputChange={(e) =>
                setRegisterData({
                  ...registerData,
                  user_password: e.target.value,
                })
              }
            />
            <InputBox
              type="password"
              label="Confirm Your Password"
              value={registerData.user_password_cnf}
              placeholder="Confirm your password..."
              handleInputChange={(e) =>
                setRegisterData({
                  ...registerData,
                  user_password_cnf: e.target.value,
                })
              }
            />
            <div className="flex justify-center items-center mt-3">
              <button className="bg-[#253974] text-white rounded-md px-4 py-2 text-sm p-auto hover:bg-[#3E63DD]">
                Register
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-center items-center">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>{" "}
              instead
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
