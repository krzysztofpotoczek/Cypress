/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i wybranie paczkomatu', () => {

  const login = (name, password) => { 
    cy.session([name,password], () => {
     cy.visit("https://www.komputronik.pl/");
     cy.get('.header__user-account > a > label', { timeout: 15000 }).should('be.visible').click();
     cy.get('#login').type(name);
     cy.get('#password').type(password);
     cy.contains('button','Zaloguj się').click(); 
   })
   }
  
  
   it("Should handle the alerts automatically", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.komputronik.pl/");
    //window:confirm is the event which get fired on alert open
    cy.on("window:confirm", (str) => {
      return false;
    });
  // cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
  }); 
     

        it("Should logIn, add to cart and choose inpost provider", () => {
          cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html"); 
      login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html");  
        cy.contains('button','Do koszyka', { timeout: 15000 }).should('be.visible').click(); 
        cy.contains('button','Nie, dziękuję - chcę kupić tylko produkt', { timeout: 15000 }).should('be.visible').click(); 
        cy.wait(3000);
        cy.contains('button','Przejdź do koszyka', { timeout: 15000 }).should('be.visible').click();
        cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click(); 
        cy.url().should('include', '/cart');
        cy.contains('a','Przejdź dalej').click();
        cy.url().should('include', '/order/checkout');
        cy.get('.checkout-type-wrap > :nth-child(2) > .f-btn').click();
        cy.get('[ktr-click-out="$ctrl.closeView()"] > .form-modern__control > .ng-valid').clear().type('NSA01A');
        cy.get(':nth-child(7) > .f-btn').click();
        cy.get('[ng-if="!$ctrl.isPointSelected(point)"] > .f-btn').click();
        cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').should('have.css', 'background-color', 'rgb(0, 114, 188)');
        cy.get('[ng-if="$ctrl.selectedPoint.point.address.length > 0"]').should('contain','Węgierska 170, 33-300 Nowy Sącz');
    });

    it("Should find DHL store", () => {
     
  login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/order/checkout");  
      cy.get(':nth-child(3) > .f-btn').click();
      cy.get(':nth-child(4) > .form-modern__control > .ng-pristine').type("Nowy Sącz Węgierska");
      cy.contains('button','Pokaż').click(); 
      cy.contains('a','Wybierz', { timeout: 15000 }).should('be.visible').click(); 
      cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').click(); 
       cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').should('have.css', 'background-color', 'rgb(0, 114, 188)');
     

    
});

it("Should find local store", () => {
     
  login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/order/checkout");  
      cy.get(':nth-child(4) > .f-btn').click();
      cy.get(':nth-child(4) > .form-modern__control > .ng-pristine').type("Nowy Sącz Węgierska");
      cy.contains('button','Pokaż').click(); 
      cy.contains('a','Wybierz', { timeout: 15000 }).should('be.visible').click(); 
      cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').click(); 
           cy.get('[ng-if="$ctrl.isPointSelected(point)"] > .f-btn').should('have.css', 'background-color', 'rgb(0, 114, 188)');
      
});
  

    // it("Delete product from cart", () => {
          
    //   login('testcypresspwsz@gmail.com','Testcypress.12345');
    // cy.visit("https://www.komputronik.pl/cart");
    //   cy.url().should('include', '/cart');
    //   cy.get('.chat-bubble-4gHwe12', { timeout: 15000 }).should('be.visible').click(); 
    //   cy.get('.form-default > .cart-table > .cart-table__list').should('exist');
    //   cy.get('.cart-table__elem-remove-button > .icon').click();
    //   cy.get('.empty-card > span').should('contain','Koszyk jest pusty', { timeout: 15000 }).should('be.visible').click();
    //   cy.get('.form-default > .cart-table > .cart-table__list').should('not.exist');
    // });

    
    })
  
  
     
  
  