/* eslint-disable indent */
// authUserReducer.test.js
import { describe, it, expect } from "vitest";
import authUserReducer from "./reducer";
import { ActionType } from "./action"; // Pastikan ActionType diimpor dari action.js

describe("authUserReducer", () => {
    it("should return the initial state when state is undefined", () => {
        const initialState = null;
        const action = { type: "UNKNOWN_ACTION" };
        const state = authUserReducer(undefined, action);
        expect(state).toEqual(initialState);
    });

    it("should handle SET_AUTH_USER action", () => {
        const action = {
            type: ActionType.SET_AUTH_USER,
            payload: { user: { id: 1, name: "John Doe" } },
        };
        const expectedState = { id: 1, name: "John Doe" };
        const state = authUserReducer(null, action);
        expect(state).toEqual(expectedState);
    });

    it("should handle UNSET_AUTH_USER action", () => {
        const initialState = { id: 1, name: "John Doe" };
        const action = {
            type: ActionType.UNSET_AUTH_USER,
        };
        const expectedState = null;
        const state = authUserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
