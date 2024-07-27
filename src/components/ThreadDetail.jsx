import React from "react";
import PropTypes from "prop-types";
import { userShape } from "./ThreadItem";
import { postedAt } from "../utils/index";

export default function ThreadDetail({
  title, body, owner, category, createdAt,
}) {
  return (
    <div className="threadDetailWrapper">
      <div className="thread-detail">
        <div className="thread-category">{category}</div>
        <div className="thread-title">{title}</div>
        <div className="thread-body">{body}</div>
        <div className="thread-info">
          <div className="thread-owner">
            <img src={owner.avatar} alt={owner.name} className="thread-owner-avatar" />
            <span>{owner.name}</span>
          </div>
          <div className="thread-created">{postedAt(createdAt)}</div>
        </div>
        <div className="thread-actions" />
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
