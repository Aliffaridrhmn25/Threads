import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { userShape } from "./ThreadItem";
import { postedAt } from "../utils";

export default function CommentItem({ content, createdAt, owner }) {
  return (
    <div>
      <div style={{ paddingBottom: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={owner.avatar} alt="Avatar Icon" style={{ width: 20, height: 20, borderRadius: "50%" }} />
            <div style={{ marginLeft: 8, fontWeight: "bold" }}>{owner.name}</div>
          </div>
          <div style={{ marginLeft: 10 }}>{postedAt(createdAt)}</div>
        </div>
        <div style={{ marginTop: 8, fontWeight: "medium" }}>{parse(content)}</div>
      </div>
      <hr />
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
};
export { commentShape };
