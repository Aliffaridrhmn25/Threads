import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
  ERROR_RECEIVE_USERS: "ERROR_RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function errorReceiveUsersActionCreator(error) {
  return {
    type: ActionType.ERROR_RECEIVE_USERS,
    payload: {
      error,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      // Optionally, handle successful registration here
      // e.g., dispatch some success action or redirect user
    } catch (error) {
      dispatch(errorReceiveUsersActionCreator(error.message));
      alert(`Registration failed: ${error.message}`);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType, receiveUsersActionCreator, errorReceiveUsersActionCreator, asyncRegisterUser,
};
