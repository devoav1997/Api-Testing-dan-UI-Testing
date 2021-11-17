describe("Register websiste bukalapak", () => {
    it('finds the content "Daftar" ', () => {
      cy.visit("https://www.bukalapak.com/");
  
      cy.contains("Daftar");
    });
    it("finds click tombol Daftar", () => {
      cy.contains("Daftar").click();
    });

    it("Click button Google", () => {
        cy.get("body > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)").click();
      });
});