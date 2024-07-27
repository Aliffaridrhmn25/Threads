import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Button from "./styled/button";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form action="registerInput">
      <input type="email" id="email" value={email} placeholder="Email" onChange={onEmailChange} />
      <input type="password" id="password" value={password} placeholder="Password" onChange={onPasswordChange} />
      <Button type="button" onClick={() => login({ email, password })}>
        Login
      </Button>
    </form>
  );
}

export default LoginInput;

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
