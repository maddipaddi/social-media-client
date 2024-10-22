describe("Login functionality", () => {
  it("should allow the user to log in with valid credentials using the login form", () => {
    cy.visit("/");

    cy.get(".btn.btn-outline-success.me-2").click();

    cy.get("#loginForm").within(() => {
      cy.get("#loginEmail").type("maddipaddi@stud.noroff.no");
      cy.get("#loginPassword").type("maddipaddi28");

      cy.get('button[type="submit"]').click();
    });

    cy.url().should("include", "/?view=profile&name=");
  });

  it("should not submit the login form with invalid credentials and shows a message to the user", () => {
    cy.visit("/");

    cy.get(".btn.btn-outline-success.me-2").click();

    cy.get("#loginForm").within(() => {
      cy.get("#loginEmail").type("invalid-email-123@noroff.no");
      cy.get("#loginPassword").type("invalid-password-123");

      cy.get('button[type="submit"]').click();
    });

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
