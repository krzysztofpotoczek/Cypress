/// <reference types="cypress" />

describe('Otwieranie strony Komputronik, stworzenie listy życzeń i usunięcie jej', () => {
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

        it("Should create wish list", () => {
          login('testcypresspwsz@gmail.com','Testcypress.12345');
          cy.visit("https://www.komputronik.pl/customer/account#!"); 
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Twoje listy życzeń').click();
        cy.url().should('include', '/customer/account#!/wishlist');
        cy.get('.wl-add-list').click();       
        cy.get(' [ng-show="$ctrl.addNewWishList && !$ctrl.successAdd"] > .form-control').type('Krzys lista');
        cy.get('.col-s360-18 > button.btn2').click(); 
        cy.get('ol > :nth-child(1) > h3').should('contain','Krzys lista')
    });

    it("Should destroy wish list", () => {
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/customer/account#!"); 
      cy.contains('a','Twoje listy życzeń').click();
      cy.url().should('include', '/customer/account#!/wishlist');
      cy.contains('button','Usuń listę').click();
      cy.get('ol > :nth-child(1) > h3').should('not.exist');
      
  });
  
});