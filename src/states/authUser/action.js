import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

// Action creators
function setAuthUserActionCreator(user) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      user,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

// Thunks
function asyncLogout() {
  return (dispatch) => {
    dispatch(showLoading());
    localStorage.removeItem("accessToken");
    dispatch(unsetAuthUserActionCreator());
    dispatch(hideLoading());
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const user = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      alert("email or password is incorrect");
    }
    dispatch(hideLoading());
  };
}

function asyncRegister({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const user = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// Exports
const authAction = {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
};

const authThunks = {
  asyncLogout,
  asyncLogin, // Ini adalah asyncSetAuthUser jika Anda mengubah nama
  asyncRegister,
};

export { authAction, authThunks, ActionType };
