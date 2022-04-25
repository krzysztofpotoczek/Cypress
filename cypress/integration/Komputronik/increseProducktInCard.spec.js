/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i zwiększenie przedmiotu o 1 w koszyku', () => {
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
  
  
   
      it("Should check add to card and incrase +1 product ", () => {
        
      //  cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click(); 
      cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html");  
      // cy.contains('span','Sprawdź', { timeout: 15000 }).should('be.visible').click(); 
       cy.contains('button','Do koszyka', { timeout: 15000 }).should('be.visible').click(); 
       cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 15000 }).should('be.visible').click(); 
       cy.contains('button','Przejdź do koszyka', { timeout: 15000 }).should('be.visible').click(); 
       cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click();  
       cy.url().should('include', '/cart');
       cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-name > .cart-table__elem-name-title')
       .should('contain','Garett Kids Sweet 2 czarny ')
       .and('have.css', 'color', 'rgb(51, 51, 51)');

       cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-price > .at-price-0')
       .should('contain','249 zł')
       .and('have.css', 'font-weight', '700');

       cy.get('.at-cart-summary-gross')
       .should('contain','249 zł')
       .and('have.css', 'color', 'rgb(0, 151, 213)');    
        cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click();      
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','1');
        cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click();  
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__action-down').click();
        
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-price > .at-price-0')
        .should('contain','249 zł')
        .and('have.css', 'font-weight', '700');
 
        cy.get('.at-cart-summary-gross')
        .should('contain','498 zł')
        .and('have.css', 'color', 'rgb(0, 151, 213)');

        cy.wait(3000);
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','2');
        
        
      });

    
    })
  
  
     
  
  