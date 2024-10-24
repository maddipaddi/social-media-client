describe("Auth functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#registerForm").find('button[data-auth="login"]').wait(500).click(); // Wait added to ensure the button is interactable before clicking, could not figure out a better way to do it
  });

  it("should allow the user to log in with valid credentials using the login form", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500); // Could not get any other method to work except add wait to make sure the form is ready for typing
      cy.get("#loginEmail").type("maddipaddi@stud.noroff.no");
      cy.get("#loginPassword").type("maddipaddi28");

      cy.get('button[type="submit"]').click();
    });

    cy.url().should("include", "/?view=profile&name=");
  });

  it("should not submit the login form with invalid credentials and shows a message to the user", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("#loginEmail").type("invalid-email-123@noroff.no");
      cy.get("#loginPassword").type("invalid-password-123");

      cy.get('button[type="submit"]').click();
    });

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.match(/username.*password is incorrect/);
    });
  });

  it("should allow the user to log out with the logout button", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("#loginEmail").type("maddipaddi@stud.noroff.no");
      cy.get("#loginPassword").type("maddipaddi28");

      cy.get('button[type="submit"]').click();
    });

    cy.get('button[data-auth="logout"]').click();

    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
