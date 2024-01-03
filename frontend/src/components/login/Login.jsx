import React from "react";

import login_art from "../assets/images/login.svg";
import RadioButton from "../common/input/RadioButton";
import InputWithoutLabel from "../common/input/InputWithoutLabel";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center bg-[#3566FF57]">
        <img src={login_art} alt="Login art" className="h-screen p-10" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl font-semibold mb-2">
          Login to your account as:
        </h2>
        <div className="ms-16">
          <RadioButton id="msme" label="MSMEs" name="msme" value="msme" />
          <RadioButton
            id="service_providers"
            label="Service Providers"
            name="service_providers"
            value="service_providers"
          />
          <RadioButton
            id="corporates"
            label="Corporates"
            name="corporates"
            value="corporates"
          />
          <RadioButton id="banks" label="Banks" name="banks" value="banks" />
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
            <button className="bg-[#3A4F97] text-white rounded-md px-4 py-2 text-sm p-auto">
              Login
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <Link href="#" className="text-sm underline">
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
