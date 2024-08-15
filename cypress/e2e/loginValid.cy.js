describe("valid login", () => {
  it("should log in using login form with valid credentials", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get('button[data-auth="login"]').last().click();
    cy.wait(500);
    cy.fixture("validLogin.json").then((loginData) => {
      cy.get("input#loginEmail").type(loginData.email);
      cy.get("input#loginPassword").type(loginData.password);
    });
    cy.get('button[type="submit"]').contains("Login").click();
    cy.url().should("include", "/?view=profile&name");

    //logout to clean up session
    cy.get('button[data-auth="logout"]').last().click();
  });
});
