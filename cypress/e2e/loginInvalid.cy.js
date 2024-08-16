describe("invalid login", () => {
  it("cannot submit login form with invalid credentials, user shown a message", () => {
    cy.visit("/");
    cy.get('button[data-auth="login"]').last().should("be.visible").click();

    cy.fixture("invalidLogin.json").then((loginData) => {
      cy.get("input#loginEmail").should("be.visible").type(loginData.email);
      cy.get("input#loginPassword").type(loginData.password);
    });

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    cy.get('button[type="submit"]').contains("Login").click();
    cy.get("@alert").should(
      "have.been.calledWith",
      "Either your username was not found or your password is incorrect",
    );
  });
});
