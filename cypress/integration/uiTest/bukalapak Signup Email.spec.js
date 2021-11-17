describe("Register websiste bukalapak", () => {
  it('finds the content "Daftar" ', () => {
    cy.visit("https://www.bukalapak.com/");

    cy.contains("Daftar");
  });
  it("finds click tombol Daftar", () => {
    cy.contains("Daftar").click();
  });

  it("Input email and Click Tombol Daftar", () => {
    cy.get(".bl-text-field__input")
      .type("devoav2022@gmail.com")
      .should("have.value", "devoav2022@gmail.com");
      cy.get('.bl-text.bl-text--body-default.bl-text--semi-bold.bl-text--inverse').click() 
      cy.wait(5000)
  });


  it("Click button Ya, Kirimkan Kode", () => {
    cy.get("span.bl-text--inverse:nth-child(1)").click();
  });
});
