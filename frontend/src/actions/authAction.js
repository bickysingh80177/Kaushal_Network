import axios from "axios";

import authConstants from "../constants/authConstants";

// user registration
const userRegistration = (userData) => async (dispatch) => {
  try {
    dispatch({ type: authConstants.REGISTER_USER_REQUEST });
    const config = { header: { "Content-Type": "multipart/form-data" } };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}api/v1/user/register`,
      userData,
      config
    );
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: authConstants.REGISTER_USER_SUCCESS,
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: authConstants.REGISTER_USER_FAIL,
      payload: DataTransfer.error,
    });
  }
};

// clearing errors
const clearError = () => async (dispatch) => {
  dispatch({
    type: authConstants.CLEAR_ERROR,
  });
};

const authAction = {
  userRegistration,
  clearError,
};

export default authAction;
