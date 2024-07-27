import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { authThunks } from "../states/authUser/action";
import Container from "../components/styled/container";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(authThunks.asyncLogin({ email, password }));
  };

  return (
    <Container>
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
    </Container>
  );
}

export default LoginPage;
