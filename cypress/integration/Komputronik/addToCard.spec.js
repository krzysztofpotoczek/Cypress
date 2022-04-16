/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i dodanie przedmiotu do koszyka', () => {
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
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();              
      });
   
      it("Should check ", () => {
        cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Do koszyka', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Przejdź do koszyka', { timeout: 20000 }).should('be.visible').click(); 
    });
  

    it("Should handle the alerts automatically", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
       
        cy.on("window:confirm", (str) => {
          return false;
        });
        cy.get('.chat-bubble-4gHwe12', { timeout: 20000 }).should('be.visible').click();              
      });
   

    
    })
  
  
     
  
  