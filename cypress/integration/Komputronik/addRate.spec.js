/// <reference types="cypress" />

describe('Zrezygnowanie z wystawienia opini', () => {
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

   
 
   
      it("Should fill rate form ", () => {
        cy.contains('span','Sprawdź', { timeout: 20000 }).should('be.visible').click(); 
        cy.get('.rv-add-rev').click();
        cy.get('.at-quality-star-over-3').click();
        cy.get('.at-func-star-over-1').click();
        cy.get('.form-group > .form-control').type('Polecam dla dzieci');        
        cy.contains('button', 'Zrezygnuj').click();
        
          })
    });
   
  

  
  
     
  
  