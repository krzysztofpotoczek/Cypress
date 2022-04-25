/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i usunięcie listy życzeń', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

    

   
    it("Should destroy wish list", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
        cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click(); 
        cy.get('.header__user-account > a > label').click();
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Twoje listy życzeń').click();
        cy.url().should('include', '/customer/account#!/wishlist');
        cy.contains('button','Usuń listę').click();
        cy.get('ol > :nth-child(1) > h3').should('not.exist');
        
    });
  
});