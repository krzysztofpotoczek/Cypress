/// <reference types="cypress" />

let i = 1;

describe('Wyszuanie produktów', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/category/2954/myszki-komputerowe.html");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
                  
    });

    it('Should check category and subcategory Sprzęt PC', () => { 
     
        cy.url().should('include', '/myszki-komputerowe.html');
        cy.get(':nth-child(2) > .gf-content > [ng-if="::($ctrl.isRangeAttribute(attribute.data_type))"] > .rz-result > :nth-child(1) > .form-control', { timeout: 20000 }).should('be.visible').type('300');
        cy.get(':nth-child(2) > .gf-content > [ng-if="::($ctrl.isRangeAttribute(attribute.data_type))"] > .rz-result > :nth-child(2) > .form-control').type('340');
        cy.get(':nth-child(3) > .gf-content > .gf-checkbox-list > :nth-child(1) > .checkbox').click();
        cy.get('.at-sort-menu > .selectize-input').click();
        cy.get(':nth-child(3) > .option > span').click();       
        cy.get(':nth-child(1) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(2) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(3) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(4) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(5) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(1) > .pe2-head-wrap > .pe2-head > .blank-link').should('contain','Logitech ');
        cy.get(':nth-child(1) > .pe2-price > ktr-price > .prices > .price > .proper').should('contain','309');
        cy.get(':nth-child(2) > .pe2-price > ktr-price > .prices > .price > .proper').should('contain','319');
        cy.get(':nth-child(3) > .pe2-price > ktr-price > .prices > .price > .proper').should('contain','319');
        cy.get(':nth-child(4) > .pe2-price > ktr-price > .prices > .price > .proper').should('contain','319');
        cy.get(':nth-child(5) > .pe2-price > ktr-price > .prices > .price > .proper').should('contain','319');
        cy.get(':nth-child(3) > .gf-content > .gf-checkbox-list > :nth-child(1) > .checkbox').should('have.css', 'color', 'rgb(27, 29, 30)');
        cy.get(':nth-child(2) > .gf-content > [ng-if="::($ctrl.isRangeAttribute(attribute.data_type))"] > .rz-result > :nth-child(2) > .form-control').should('not.be.empty');
  })  
  
    
   
})  
 
  
       
    
   