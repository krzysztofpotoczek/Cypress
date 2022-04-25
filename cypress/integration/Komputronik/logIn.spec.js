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
      cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

      
    it("Should logIn", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
    });
  
    it("Should handle the alerts automatically", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
       
        cy.on("window:confirm", (str) => {
          return false;
        });
        cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
      });

   

     
     
     
  

    })
  
  
     
  
  