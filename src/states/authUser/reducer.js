/* eslint-disable default-param-last */
import { ActionType } from "./action"; // Pastikan ActionType diimpor dari action.js

function authUserReducer(state = null, action) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.user; // Menggunakan `user` untuk konsistensi dengan action creator
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return state;
  }
}

export default authUserReducer;
