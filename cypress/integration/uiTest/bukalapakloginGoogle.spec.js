describe("Register websiste bukalapak", () => {
    it('finds the content "Login" ', () => {
      cy.visit("https://www.bukalapak.com/");
  
      cy.contains("Login");
    });
    it("finds click tombol Login", () => {
      cy.contains("Login").click();
    });

    it("Click button Google", () => {
        cy.get(".qa--btn-google.bl-button.bl-button--outline.bl-button--medium.bl-button--block").click();
      });
});