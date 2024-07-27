// src/utils/api.js
const api = (() => {
  const BASE_URL = "https://forum-api.dicoding.dev/v1";

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.user;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.users;
  }

  async function createThread({ title, body, category }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, category }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.thread;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.detailThread;
  }

  async function createComment({ content, threadId }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.comment;
  }

  async function upVoteThread(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/up-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function downVoteThread(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/down-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function neutralizeThreadVote(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/neutral-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
  }

  async function upVoteComment(threadId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.vote;
  }

  async function downVoteComment(threadId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.vote;
  }

  async function neutralVoteComment(threadId, commentId) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.vote;
  }

  async function getLeaderBoards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return data.leaderboards;
  }

  return {
    login,
    register,
    getAllThreads,
    getThreadDetail,
    createThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralizeThreadVote,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderBoards,
    getAccessToken,
    putAccessToken,
    getAllUsers,
    getOwnProfile,
  };
})();

export default api;
