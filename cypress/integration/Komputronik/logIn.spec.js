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
                  
    });

      
    it("Should logIn", () => {
      cy.visit("https://www.komputronik.pl/");
      
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
    });
   

     
     
     
  

    })
  
  
     
  
  