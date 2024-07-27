import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { authThunks } from "../states/authUser/action";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(authThunks.asyncLogin({ email, password }));
  };

  return (
    <div className="loginPageWrapper">
      <div>
        <h2>Welcome 🔥</h2>
      </div>
      <LoginInput login={onLogin} />
      <div>
        <h3>
          {" "}
          <Link to="/register">Register</Link>
        </h3>
      </div>
    </div>
  );
}

export default LoginPage;
