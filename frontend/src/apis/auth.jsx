import axios from "axios";
import { toast } from "react-toastify";

export async function loginUser(data) {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "api/v1/login-user",
      data
    );
    return response.data;
  } catch (err) {
    toast.warning(err.response.data.msg);
  }
}

export async function registerUser(data) {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "api/v1/register",
      data
    );
    return response.data;
  } catch (err) {
    toast.warning(err.response.data.msg);
  }
}
