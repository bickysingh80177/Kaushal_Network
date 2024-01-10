import React, { useState } from "react";
import { toast } from "react-toastify";
import register_art from "../assets/images/Register_art.svg";
import RadioButton from "../common/input/RadioButton";
import { Link } from "react-router-dom";
import { loginOptions } from "../../constants/constantOptions";
import InputBox from "../common/input/InputBox";

const Register = () => {
  const initialFormState = {
    user_type: "",
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_cnf: "",
  };

  const [registerData, setRegisterData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.user_password !== registerData.user_password_cnf) {
      console.log("no match");
      toast.warning("Passwords do not match");
    }
    console.log(registerData);
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
          <h3 className="mb-4 font-semibold text-gray-900">
            Login to your account as:
          </h3>
          <div className="">
            <RadioButton
              value={registerData.user_type}
              name="user_type"
              options={loginOptions}
              handleInputChange={(e) =>
                setRegisterData({ ...registerData, user_type: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col bg-[#abb9ff1a] p-3 rounded-md mt-4 lg:w-[25rem] w-[17rem]">
            <InputBox
              label="Name"
              value={registerData.user_name}
              placeholder="Enter your name..."
              handleInputChange={(e) =>
                setRegisterData({ ...registerData, user_name: e.target.value })
              }
            />
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
              label="Password"
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
              label="Confirm Password"
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
              Allready have an account?{" "}
              <Link to="/" className="underline">
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
