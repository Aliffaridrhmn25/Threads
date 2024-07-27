/* eslint-disable max-len */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { threadId } = useParams();

  const { threadDetail = null, authUser } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [dispatch, threadId]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail(threadId));
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ threadId, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment(commentId));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment(commentId));
  };

  const onNeturalizeVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment(commentId));
  };

  if (threadDetail === null) {
    return <LoadingBar />;
  }

  return (
    <div className="detail-page-wrapper">
      <ThreadDetail {...threadDetail} authUser={authUser.id} upVoteThreadDetail={onUpVoteThreadDetail} downVoteThreadDetail={onDownVoteThreadDetail} neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail} />
      <div className="commentContent">
        <CommentInput addComment={onCommentSubmit} />
        <CommentList comments={threadDetail.comments} authUser={authUser.id} upVoteComment={onUpVoteComment} downVoteComment={onDownVoteComment} neturalizeVoteComment={onNeturalizeVoteComment} />
      </div>
    </div>
  );
}
