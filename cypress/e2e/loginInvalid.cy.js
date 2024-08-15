describe("invalid login", () => {
  it("cannot submit login form with invalid credentials, user shown a message", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get('button[data-auth="login"]').last().click();
    cy.wait(500);
    cy.fixture("invalidLogin.json").then((loginData) => {
      cy.get("input#loginEmail").type(loginData.email);
      cy.get("input#loginPassword").type(loginData.password);
    });
    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(500);

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
