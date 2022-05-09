/// <reference types="cypress" />

describe('Porównanie produktów', () => {

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


    it('Should compare 2 products', () => { 
      cy.visit("https://www.komputronik.pl/");
      cy.visit("https://www.komputronik.pl/search-filter/1596/seria-samsung-galaxy-s21");
   
      cy.url().should('include', '/seria-samsung-galaxy-s21');
      cy.get('.at-add-to-compare-0 > .checkbox').click({force: true});
      cy.contains('button','Zamknij okno').click({force: true});
      cy.get('.at-add-to-compare-1 > .checkbox').click({force: true});
      cy.contains('button','Porównaj teraz').click({force: true});
      cy.wait(3000);
      cy.get('.header > .caption').should('contain','Porównanie produktów');
      cy.contains('div','Samsung Galaxy S21 FE 5G 128GB Dual SIM oliwkowy (G990)').should('contain','Samsung Galaxy S21 FE 5G 128GB Dual SIM oliwkowy (G990)');
      cy.contains('div','Samsung Galaxy S21 Ultra 5G 128GB Dual SIM czarny (G998)').should('contain','Samsung Galaxy S21 Ultra 5G 128GB Dual SIM czarny (G998)');
      cy.get(':nth-child(1) > h2').should('contain','Dane techniczne');
  })  
  
    
 
    })
  
       
    
   