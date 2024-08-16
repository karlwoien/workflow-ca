describe("valid login", () => {
  it("should log in using login form with valid credentials", () => {
    cy.visit("/");
    cy.get('button[data-auth="login"]').last().should("be.visible").click();

    cy.fixture("validLogin.json").then((loginData) => {
      cy.get("input#loginEmail").should("be.visible").type(loginData.email);
      cy.get("input#loginPassword").type(loginData.password);
    });

    cy.get('button[type="submit"]').contains("Login").click();
    cy.url().should("include", "/?view=profile&name");

    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.not.be.null;
    });
  });
});
