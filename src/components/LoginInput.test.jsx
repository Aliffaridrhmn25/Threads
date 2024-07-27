/**
 * Test Scenarios
 *
 * - LoginInput component
 *   - should handle email typing correctly
 */

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import LoginInput from "./LoginInput";

// Extend Jest matchers with @testing-library/jest-dom matchers
expect.extend(matchers);

describe("LoginInput component", () => {
  it("should handle email typing correctly", async () => {
    // Arrange: Render the LoginInput component with a dummy login function
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    // Action: Simulate typing an email into the input field
    await userEvent.type(emailInput, "usernametest@gmail.com");

    // Assert: Check that the email input value matches the typed email
    expect(emailInput).toHaveValue("usernametest@gmail.com");
  });
});
