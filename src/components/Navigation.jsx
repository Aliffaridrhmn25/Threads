/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import React from "react";

export default function Navigation({ authUser, logOut }) {
  return (
    <div className="navigationWrapper">
      <div className="titleWrapper">
        <h2>Threads👀</h2>
      </div>
      <div>
        {authUser && (
          <button type="submit" onClick={logOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};
