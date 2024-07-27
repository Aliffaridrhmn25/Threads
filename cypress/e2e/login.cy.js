describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display login page correctly", () => {
    // Check if the input fields and button are visible
    cy.get("input[placeholder=\"Email\"]").should("be.visible");
    cy.get("input[placeholder=\"Password\"]").should("be.visible");
    cy.get("button").contains(/^Login$/).should("be.visible");
  });

  it("should display homepage when email and password are correct", () => {
    // Fill in email
    cy.get("input[placeholder=\"Email\"]").type("testuser@example.com");

    // Fill in password
    cy.get("input[placeholder=\"Password\"]").type("test123456");

    // Click login button
    cy.get("button").contains(/^Login$/).click();

    // Verify redirection to homepage
    cy.url().should("include", "/");
    cy.get("h2").contains("Welcome").should("be.visible"); // Adjust according to actual homepage content
  });

  it("should display an alert when email or password is incorrect", () => {
    // Spy on the window.alert method
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    // Fill in incorrect email and password
    cy.get("input[placeholder=\"Email\"]").type("wronguser@example.com");
    cy.get("input[placeholder=\"Password\"]").type("wrongpassword");

    // Click login button
    cy.get("button").contains(/^Login$/).click();

    // Verify alert was called with the expected message
    cy.get("@alert").should("be.calledWith", "email or password is incorrect");
  });
});
