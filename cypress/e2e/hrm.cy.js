it("hrm", () => {
  //login
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[placeholder='Password']").type("admin123");
  cy.get("button[type='submit']").click();
  //dashboard logout
  cy.xpath("//p[@class='oxd-userdropdown-name']").click();

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
});
