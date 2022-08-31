// Simple UI Functionality for Button
describe("UI Functionality", () => {
  it("Click Create Note and Open Modal", () => {
    cy.visit("/");

    cy.get("button.fill.purple").click();

    cy.get(".modal").should("have.class", "active");
  });

  it("Open and Close Modal", () => {
    cy.visit("/");

    cy.get("button.fill.purple").click();

    cy.get(".modal").should("have.class", "active");

    cy.get(".modal .close").click();

    cy.get(".modal").should("not.have.class", "active");
  });
});