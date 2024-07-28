import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form action="registerInput">
      <input type="email" id="email" value={email} placeholder="Email" onChange={onEmailChange} />
      <input type="password" id="password" value={password} placeholder="Password" onChange={onPasswordChange} />
      <button type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

export default LoginInput;

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
