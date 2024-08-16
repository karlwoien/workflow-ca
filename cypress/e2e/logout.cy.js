describe("logout function", () => {
  it("should logout user when using the logout button", () => {
    cy.visit("/");

    cy.get('button[data-auth="login"]').last().should("be.visible").click();

    cy.fixture("validLogin.json").then((loginData) => {
      cy.get("input#loginEmail").should("be.visible").type(loginData.email);
      cy.get("input#loginPassword").type(loginData.password);
    });

    cy.get('button[type="submit"]').contains("Login").click();

    cy.url().should("include", "/?view=profile&name");

    cy.get('button[data-auth="logout"]').first().should("be.visible").click();

    //Check that token is removed after logout
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
