/* eslint-disable indent */
// src/api/api.js

const BASE_URL = "https://forum-api.dicoding.dev/v1";

async function handleResponse(response) {
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== "success") {
        throw new Error(message);
    }

    return data;
}

async function get(url, options = {}) {
    const response = await fetch(url, options);
    return handleResponse(response);
}

async function post(url, body, options = {}) {
    const response = await fetch(url, {
        ...options,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        body: JSON.stringify(body),
    });
    return handleResponse(response);
}

async function put(url, body, options = {}) {
    const response = await fetch(url, {
        ...options,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        body: JSON.stringify(body),
    });
    return handleResponse(response);
}

async function del(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });
    return handleResponse(response);
}

export {
    get, post, put, del, BASE_URL,
};
