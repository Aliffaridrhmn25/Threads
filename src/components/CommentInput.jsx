import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

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
      <form onSubmit={onCommentSubmit}>
        <textarea id="outlined-multiline-flexible" rows="4" style={{ width: "100%" }} value={comment} onChange={onCommentChange} />
        <button type="submit" style={{ marginTop: "10px" }}>
          Kirim
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
