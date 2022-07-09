 /// <reference types = "Cypress" />


describe("checking counter",()=>{
  it("should exist in the document",()=>{
   
   cy.visit('http://localhost:3000');
    cy.get("h2").should('exist');
    cy.get('.increment_count').should('exist')
    cy.get('.decrement_count').should('exist')

  })
 it("should increment counter",()=>{
    cy.visit('http://localhost:3000');
    cy.get("h2").should("have.text","count is 0");
    cy.get('.increment_count').click()
    cy.get("h2").should("have.text","count is 1")
 })
 it("should increment  counter multiple counter",()=>{
    cy.visit('http://localhost:3000');
    cy.get("h2").should("have.text","count is 0");
    cy.get('.increment_count').click()
    cy.get('.increment_count').click()

    cy.get("h2").should("have.text","count is 2")
 })
   
 beforeAll(()=>{
    cy.visit("http://localhost:3000")
 })
 it("should intercept GET request",()=>{
    cy.intercept("GET","http://localhost:8080/counter",{value:10}).as('getReq')
 cy.wait('@getReq')
   cy.get(".increment_count").click();
   cy.intercept("post",)
})


})