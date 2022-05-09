/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i logowanie', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      //cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

      
    it("Should display validation in login form", () => {
      cy.visit("https://www.komputronik.pl/");
      cy.get('.header__user-account > a > label').click();
      cy.get('#login').type('testcypresspwsz.com');
      cy.get('#password').type('Testcypress');
      cy.contains('button','Zaloguj się').click();
      cy.get('.alert').should('contain','Nieprawidłowe logowanie.')
      .and('have.css', 'color', 'rgb(212, 17, 28)')
      .and('have.css', 'padding-left', '10px')
      .and('have.css', 'font-weight', '600')
     
  });   
  
    
    })
  
  
     
  
  