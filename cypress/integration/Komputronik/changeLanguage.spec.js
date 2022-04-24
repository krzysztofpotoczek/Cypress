/// <reference types="cypress" />

describe('Zmiana języka z PL na CZ', () => {
  it("Should handle the alerts automatically", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("https://www.komputronik.pl/");
    //window:confirm is the event which get fired on alert open
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get('.webpush-followup-close', { timeout: 10000 }).should('be.visible').click();              
  });

  
  it('Should verify PL', () => { 

    cy.contains('div','Sklepy');
    cy.contains('div','Zaloguj');
    cy.contains('div','Koszyk');   
    cy.contains('span','PL');
})

  it('Should change language', () => {   
                      
    cy.get('.active > .flag').click();  
    cy.contains('span','CZ').click();  
    })

  })

     
  
 