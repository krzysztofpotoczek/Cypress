/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i dodanie do schowka', () => {
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
     
  });
  

      
    it("Should add to clipboard", () => {
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html"); 
        cy.contains('span','Do schowka', { timeout: 15000 }).should('be.visible').click();
        cy.get('.col-s360-18 > .btn2', { timeout: 15000 }).should('be.visible').click();
        cy.url().should('include', '/customer/account#!/clipboard');
        cy.get('.compact-product > a').should('exist');
    });

    it("Should delete product from clipboard", () => {
    
      login('testcypresspwsz@gmail.com','Testcypress.12345');
      cy.visit("https://www.komputronik.pl/customer/account#!/clipboard"); 
      cy.url().should('include', '/customer/account#!');
      cy.contains('a','Twój schowek').click();
      cy.url().should('include', '/customer/account#!/clipboard');
      cy.get('.compact-product > a').should('exist');
      cy.get('.btn > strong').click();
      cy.get('.global-alert > span').should('contain','Usunięto produkt ze schowka.');
      cy.get('.compact-product > a').should('not.exist');
      cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)');
      cy.get('.global-alert').should('have.css', 'color', 'rgb(62, 142, 28)');
      
  });
   
    })
  
  
     
  
  