/* eslint-disable max-len */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThreadsList from "../components/ThreadsList";
import asyncPopulateUsersAndThreads from "../states/shared/action";
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeturalizeVoteThread } from "../states/threads/action";
import Container from "../components/styled/container";

function HomePage() {
  const dispatch = useDispatch();
  const { threads = [], users = [], authUser } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <Container>
      <div className="wrapper">
        <div className="addThreads">
          <Link to="/new">Tambah Threads</Link>
        </div>
        <ThreadsList threads={threadList} upVote={onUpVoteThread} downVote={onDownVoteThread} neturalizeVote={onNeturalizeVoteThread} />
      </div>
    </Container>
  );
}

export default HomePage;
