/**
 * Test Scenarios
 *
 * - isPreloadReducer
 *   - should return the initial state when given an unknown action
 *   - should return the updated preload state when given the SET_IS_PRELOAD action
 */

import { describe, it, expect } from "vitest";
import isPreloadReducer from "./reducer";
import { ActionType } from "./action";

describe("isPreloadReducer", () => {
    it("should return the initial state when given an unknown action", () => {
        // Arrange: Define the initial state and unknown action
        const initialState = true;
        const action = { type: "UNKNOWN" };

        // Action: Call the reducer with the initial state and unknown action
        const nextState = isPreloadReducer(initialState, action);

        // Assert: Verify that the state remains unchanged
        expect(nextState).toBe(initialState);
    });

    it("should return the updated preload state when given the SET_IS_PRELOAD action", () => {
        // Arrange: Define the initial state and SET_IS_PRELOAD action with a payload
        const initialState = true;
        const action = {
            type: ActionType.SET_IS_PRELOAD,
            payload: { isPreload: false },
        };

        // Action: Call the reducer with the initial state and SET_IS_PRELOAD action
        const nextState = isPreloadReducer(initialState, action);

        // Assert: Verify that the state is updated correctly
        expect(nextState).toBe(false);
    });
});
