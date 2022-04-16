/// <reference types="cypress" />



describe('Otwieranie strony Komputronik i usuwanie przedmiotu ze schowka', () => {
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

   
    it("Should delete product from clipboard", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click(); 
        cy.get('.header__user-account > a > label').click();
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Twój schowek').click();
        cy.url().should('include', '/customer/account#!/clipboard');
        cy.get('.btn > strong').click();
        cy.get('.global-alert > span').should('contain','Usunięto produkt ze schowka.');
        
    });
  
});