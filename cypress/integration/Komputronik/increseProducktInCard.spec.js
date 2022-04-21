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
      cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();              
    });

      
    it("Should logIn", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
    });
  
  
   
      it("Should check add to card and incrase +1 product ", () => {
        
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();  
        cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Do koszyka', { timeout: 20000 }).should('be.visible').click(); 
        cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 20000 }).should('be.visible').click(); 
        cy.wait(3000);
        cy.contains('button','Przejdź do koszyka', { timeout: 20000 }).should('be.visible').click();      
        //cy.get('.chat-bubble-4gHwe12', { timeout: 20000 }).should('be.visible').click();      
        cy.url().should('include', '/cart');
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','1');
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__action-down').click();
         cy.get('.at-gross-value-0');
         cy.get('.at-cart-summary-gross');       
        cy.wait(3000);
        cy.get('[ng-repeat-start="item in vm.cart.items track by $index"] > .cart-table__elem-qty > .flex-qty-control > .flex-qty-control__input-wrap > .flex-qty-control__input').should('have.value','2');
        
        
      });

    
    })
  
  
     
  
  