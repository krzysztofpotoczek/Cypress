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

      
    it("Should logIn, add to cart and choose provider", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click(); 
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();    
        cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Do koszyka', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Przejdź do koszyka', { timeout: 20000 }).should('be.visible').click();
        cy.get('.chat-bubble-4gHwe12', { timeout: 20000 }).should('be.visible').click(); 
        cy.url().should('include', '/cart');
        cy.contains('a','Przejdź dalej').click();
        cy.url().should('include', '/order/checkout');
        cy.get('.checkout-type-wrap > :nth-child(2) > .f-btn').click();
        cy.get('[ktr-click-out="$ctrl.closeView()"] > .form-modern__control > .ng-valid').clear().type('NSA01A');
        cy.get(':nth-child(7) > .f-btn').click();
        cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').click();
        cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').should('have.css', 'background-color', 'rgb(0, 114, 188)');
        cy.get('[ng-if="$ctrl.selectedPoint.point.address.length > 0"]').should('contain','Węgierska 170, 33-300 Nowy Sącz');
    });
  

  

    
    })
  
  
     
  
  