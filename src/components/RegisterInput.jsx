import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Button from "./styled/button";

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Mohon konfirmasi ulang password !");
      return;
    }
    register({ name, email, password });
  };

  return (
    <form action="registerInput" onSubmit={handleRegister}>
      <input type="text" value={name} placeholder="Name" onChange={onNameChange} />
      <input type="email" value={email} placeholder="Email" onChange={onEmailChange} />
      <input type="password" value={password} placeholder="Password" onChange={onPasswordChange} />
      <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={onConfirmPasswordChange} />
      <Button type="submit">Register</Button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
