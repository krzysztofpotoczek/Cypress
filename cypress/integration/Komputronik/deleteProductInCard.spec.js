/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i usunięcie przedmiotu do koszyka', () => {
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

 
    it("Should add product to cart", () => {
      cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();  
      cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click(); 
      cy.contains('button','Do koszyka', { timeout: 20000 }).should('be.visible').click(); 
      cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 20000 }).should('be.visible').click(); 
      cy.wait(3000);
      cy.contains('button','Przejdź do koszyka', { timeout: 20000 }).should('be.visible').click(); 
  });



    it("Delete product from cart", () => {
    //  cy.get('.chat-bubble-4gHwe12', { timeout: 20000 }).should('be.visible').click();        
      cy.url().should('include', '/cart');
      cy.get('.form-default > .cart-table > .cart-table__list').should('exist');
      cy.get('.cart-table__elem-remove-button > .icon').click({ multiple: true });
      cy.get('.empty-card > span').should('contain','Koszyk jest pusty');
      cy.get('.form-default > .cart-table > .cart-table__list').should('not.exist');
    });
 
    
  

  
  })


   

