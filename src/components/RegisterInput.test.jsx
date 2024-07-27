/**
 * Test Scenarios
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 */

import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "./RegisterInput";

// Extend Jest matchers with @testing-library/jest-dom matchers
expect.extend(matchers);

describe("RegisterInput component", () => {
  it("should handle email typing correctly", async () => {
    // Arrange: Render the RegisterInput component with a dummy register function
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText("Email");

    // Action: Simulate typing an email into the input field
    await userEvent.type(emailInput, "aliffaridrhmn60@gmail.com");

    // Assert: Check that the email input value matches the typed email
    expect(emailInput).toHaveValue("aliffaridrhmn60@gmail.com");
  });
});
