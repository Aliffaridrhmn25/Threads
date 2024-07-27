import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({
    name, id, password, email,
  }) => {
    dispatch(
      asyncRegisterUser({
        id,
        name,
        password,
        email,
      }),
    );
    navigate("/");
  };

  return (
    <div className="registerPageWrapper">
      <h1>Create Your Account 👋 </h1>
      <RegisterInput register={onRegister} />
      <h3>
        Already Have Account ?
        {" "}
        <Link to="/login">Login</Link>
      </h3>
    </div>
  );
}

export default RegisterPage;
