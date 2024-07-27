// src/api/users.js
import { get, BASE_URL } from './api';

async function getUsers() {
    return get(`${BASE_URL}/users`);
}

async function me() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        throw new Error("Access token is not available");
    }

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return get(`${BASE_URL}/users/me`, options);
}

export { getUsers, me };
