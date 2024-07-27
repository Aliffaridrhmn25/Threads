import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncCreateThread } from "../states/threads/action";
import ThreadInput from "../components/ThreadInput";
import Container from "../components/styled/container";

export default function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  };
  return (
    <Container>
      <h1>Buat Thread Baru</h1>

      <ThreadInput addThread={onAddThread} />
    </Container>
  );
}
