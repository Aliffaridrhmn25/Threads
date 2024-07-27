import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./components/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { authThunks } from "./states/authUser/action";
import Loading from "./components/Loading";
import AddThreadPage from "./pages/AddThreadPage";

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(authThunks.asyncLogout());
  };

  if (isPreload) {
    return <Loading />;
  }

  return (
    <div className="appContainer">
      <header>{authUser && <Navigation authUser={authUser} logOut={onLogOut} />}</header>
      <main>
        <Routes>
          {authUser === null ? (
            <>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/thread/:threadId" element={<DetailPage />} />
              <Route path="/new" element={<AddThreadPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
