import React from "react";
import PropTypes from "prop-types";
import CommentItem, { commentShape } from "./CommentItem";

export default function CommentsList({
  comments, authUser, upVoteComment, downVoteComment, neturalizeVoteComment,
}) {
  return (
    <div className="commentWrapper">
      {comments.map((comment) => (
        // eslint-disable-next-line max-len
        <CommentItem key={comment.id} {...comment} authUser={authUser} upVote={upVoteComment} downVote={downVoteComment} neturalizeVote={neturalizeVoteComment} />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neturalizeVoteComment: PropTypes.func.isRequired,
};
