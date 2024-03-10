import authConstants from "../constants/authConstants";

const loginRegUser = (state = { user: {} }, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
    case authConstants.REGISTER_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case authConstants.LOGIN_SUCCESS:
    case authConstants.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case authConstants.LOGIN_FAIL:
    case authConstants.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case authConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

const userReducer = {
  loginRegUser,
};

export default userReducer;
