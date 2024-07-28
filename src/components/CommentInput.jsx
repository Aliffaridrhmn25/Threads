import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Button from "./styled/button";

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput("");

  const onCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <div>
      <h1>Beri Komentar</h1>
      <form>
        <textarea id="outlined-multiline-flexible" rows="4" style={{ width: "100%" }} value={comment} onChange={onCommentChange} />
        <Button type="button" onClick={onCommentSubmit} style={{ marginTop: "10px" }}>
          Kirim
        </Button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
