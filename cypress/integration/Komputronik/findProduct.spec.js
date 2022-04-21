/// <reference types="cypress" />

describe('Wyszuanie produktów', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 10000 }).should('be.visible').click();              
    });
  
    
    it('Should type i find produckt', () => { 
      
        cy.get('.input-group').type('Xiaomi Redmi 9A 2/32GB');
        cy.get('.btn > .micon').click();
        cy.url().should('include', '/search/category/1?query=Xiaomi%20Redmi%209A%202%2F32GB');
        cy.get(':nth-child(1) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Xiaomi Redmi 9C 2/32GB szary');
  })  
    })
  
       
    
   