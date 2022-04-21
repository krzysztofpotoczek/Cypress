/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i dodanie do schowka', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();              
    });

      
    it("Should add to clipboard", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click();
        cy.contains('span','Do schowka', { timeout: 20000 }).should('be.visible').click();
        cy.get('.col-s360-18 > .btn2', { timeout: 20000 }).should('be.visible').click();
        cy.url().should('include', '/customer/account#!/clipboard');
        cy.get('.name').should('contain','Xiaomi Redmi 10C 4/64GB Mint Green ' );
    });
   
    })
  
  
     
  
  