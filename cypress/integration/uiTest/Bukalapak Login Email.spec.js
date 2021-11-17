describe("Register websiste bukalapak", () => {
    it('finds the content "Login" ', () => {
      cy.visit("https://www.bukalapak.com/");
  
      cy.contains("Login");
    });
    it("finds click tombol Login", () => {
      cy.contains("Login").click();
    });
    it("Input email and Click Tombol Lanjut", () => {
        cy.get(".bl-text-field__input")
          .type("devoav2012@gmail.com")
          .should("have.value", "devoav2012@gmail.com");
          cy.get('#submit_button').click({force: true}) 
      });

      it("Input password and Click Tombol Login", () => {
        cy.get("#Password")
          .type("Mantappujiwa123")
          .should("have.value", "Mantappujiwa123");
          cy.get('#btn-login').click() 
          cy.wait(5000)
      });
});