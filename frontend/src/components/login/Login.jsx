import React, { useState } from "react";

import login_art from "../assets/images/login.svg";
import RadioButton from "../common/input/RadioButton";
import InputWithoutLabel from "../common/input/InputWithoutLabel";
import { Link, useNavigate } from "react-router-dom";
import { enterpriseOptions } from "../../constants/constantOptions";
import { useDispatch } from "react-redux";
import { loginUser } from "../../apis/auth";
import { onUserLogin } from "../../redux/slices/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const initialFormState = {
    // user_type: "",
    user_email: "",
    user_password: "",
  };

  const [loginData, setLoginData] = useState(initialFormState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await loginUser(loginData);
    if (resp) {
      dispatch(onUserLogin(resp));
      navigate("/");
      toast.success("Logged in successfully!");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-screen">
      <div className="w-full hidden lg:flex lg:justify-center lg:items-center bg-[#b8dae95c]">
        <img src={login_art} alt="Login art" className="h-screen p-28" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center bg-[#fdfdfc]"
      >
        <div className="flex justify-center items-center flex-col w-full bg-[#ffffff3d] ">
          <h3 className="mb-4 font-semibold text-gray-900">
            Login to your account as:
          </h3>
          {/* <div className="">
            <RadioButton
              value={loginData.user_type}
              name="user_type"
              options={enterpriseOptions}
              handleInputChange={(e) =>
                setLoginData({ ...loginData, user_type: e.target.value })
              }
            />
          </div> */}
          <div className="flex flex-col bg-[#abb9ff1a] p-3 rounded-md mt-4 lg:w-1/2 w-[17rem]">
            <InputWithoutLabel
              type="email"
              name="user_email"
              placeholder="Enter your Email"
              value={loginData.user_email}
              handleInputChange={(e) =>
                setLoginData({ ...loginData, user_email: e.target.value })
              }
            />
            <InputWithoutLabel
              type="password"
              name="user_password"
              value={loginData.user_password}
              placeholder="Enter your password"
              handleInputChange={(e) =>
                setLoginData({ ...loginData, user_password: e.target.value })
              }
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
              <Link to="/register" className="underline">
                Sign up
              </Link>{" "}
              instead
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
