import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function ThreadItem({
  id, title, body, category, createdAt, totalComments, threadOwner,
}) {
  return (
    <div className="thread-item-wrapper">
      <div className="thread-item-body">
        <div className="thread-item-title">
          <Link to={`/thread/${id}`}>{title}</Link>
        </div>
        <div className="thread-item-content">
          <p>{body}</p>
        </div>
        <div className="thread-item-category">
          <h4>{category}</h4>
        </div>
        <div className="thread-item-created-at">
          <h6>{showFormattedDate(createdAt)}</h6>
        </div>
        <div className="thread-item-comments">
          <h6>
            {totalComments}
            {" "}
            Comments
          </h6>
        </div>
        <div className="thread-item-owner">
          <h6>
            By
            {threadOwner.name}
          </h6>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape, userShape };
