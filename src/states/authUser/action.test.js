/* eslint-disable max-len */
/* eslint-disable indent */
/**
 * Test Scenarios
 *
 * - authThunks.asyncLogout
 *   - should dispatch action correctly when success logout
 *
 * - authThunks.asyncLogin
 *   - should dispatch action correctly when success login
 *   - should dispatch action correctly when login failed
 *
 * - authThunks.asyncRegister
 *   - should dispatch action correctly when success register
 *   - should dispatch action correctly when register failed
 */
import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
    describe, expect, it, vi,
} from "vitest";

import api from "../../utils/api"; // Import API yang telah diperbaiki

import { authAction, authThunks } from "./action";

global.localStorage = {
    removeItem: vi.fn(),
    setItem: vi.fn(),
};

const fakeLoginResponseSuccess = {
    status: "success",
    message: "ok",
    data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9MDAwMDAwJmNvbG9yPUYwRkZGMiZzbGljZS0xIiwiaWF0IjoxNjg5NzEwMTUyLCJleHAiOjE2ODk3OTY1NTJ9.0T6U2TkKmH0SAQFsx0QYfUbuhrlVDthxLZ9uZca7aPs",
    },
};

const fakeLoginResponseFailed = {
    status: "fail",
    message: "email or password is incorrect",
};

const fakeMeResponseSuccess = {
    status: "success",
    message: "ok",
    data: {
        user: {
            id: "user-123",
            name: "John Doe",
            email: "john@example.com",
            avatar: "https://generated-image-url.jpg",
        },
    },
};

describe("asyncLogout thunk", () => {
    it("should dispatch action correctly when success logout", async () => {
        // arrange
        const dispatch = vi.fn();

        // action
        await authThunks.asyncLogout()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(authAction.unsetAuthUserActionCreator());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(localStorage.removeItem).toHaveBeenCalledWith("accessToken");
    });
});

describe("asyncLogin thunk", () => {
    it("should dispatch action correctly when success login", async () => {
        // arrange
        const dispatch = vi.fn();
        const loginInput = {
            email: "john@example.com",
            password: "password",
        };

        // mock login api
        api.login = vi.fn().mockResolvedValue(fakeLoginResponseSuccess.data.token);

        // mock getOwnProfile api
        api.getOwnProfile = vi.fn().mockResolvedValue(fakeMeResponseSuccess.data.user);

        // action
        await authThunks.asyncLogin(loginInput)(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(authAction.setAuthUserActionCreator(fakeMeResponseSuccess.data.user));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(localStorage.setItem).toHaveBeenCalledWith("accessToken", fakeLoginResponseSuccess.data.token);
    });

    it("should dispatch action correctly when login failed", async () => {
        // arrange
        const dispatch = vi.fn();
        const loginInput = {
            email: "john@example.com",
            password: "wrong_password",
        };

        // mock login api
        api.login = vi.fn().mockRejectedValue(new Error(fakeLoginResponseFailed.message));

        // action
        await authThunks.asyncLogin(loginInput)(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    });
});
