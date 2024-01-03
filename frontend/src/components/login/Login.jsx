import React, { useState } from "react";

import login_art from "../assets/images/login.svg";
import RadioButton from "../common/input/RadioButton";
import InputWithoutLabel from "../common/input/InputWithoutLabel";
import { Link } from "react-router-dom";
import { loginOptions } from "../../constants/constantOptions";

const Login = () => {
  const initialFormState = {
    user_type: "",
    user_email: "",
    user_password: "",
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center bg-[#3566FF57]">
        <img src={login_art} alt="Login art" className="h-screen p-28" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <RadioButton
            label="Login to your account as:"
            options={loginOptions}
            name="user_type"
            value="user_type"
          />
        </div>
        <div className="flex flex-col bg-[#abb9ff1a] p-3 rounded-md mt-4 w-1/2">
          <InputWithoutLabel
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <InputWithoutLabel
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-center items-center mt-2">
            <button className="bg-[#253974] text-white rounded-md px-4 py-2 text-sm p-auto hover:bg-[#3E63DD]">
              Login
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <Link href="#" className="text-sm underline m-3">
            Forgot Password?
          </Link>
          <span>
            Doesn't have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>{" "}
            instead
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
