/// <reference types="cypress" />

describe('Otwieranie strony Komputronik i sprawdzenie walidacji hasła i reCaptcha w formularzu rejestracji', () => {
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



  it("Should register and check validation", () => {
    cy.visit("https://www.komputronik.pl/register");
    cy.url().should('include', '/register');
    cy.get('.col-lg-10 > .ng-valid-email').type('krzysgmail.com');
    cy.get('.strength-meter-wrap > .form-control').type('Test.12345');
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.get(':nth-child(1) > .checkbox').click();
    cy.get('.col-md-15 > .btn > .primary').click();
    cy.get('.strength-meter-wrap > .form-control').should('have.css', 'color', 'rgb(85, 89, 92)');
    cy.get('.strength-meter-wrap > .form-control').should('have.css', 'background-color', 'rgb(207, 255, 187)');
    cy.get('.strength-meter-wrap > .form-control').should('have.css', 'border-color', 'rgb(116, 195, 84)');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'background-color', 'rgb(248, 231, 231)');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'border-color', 'rgb(213, 0, 0)');   
    cy.contains('div','Nieprawidłowa wartość').should('contain','Nieprawidłowa wartość');
    cy.contains('div','Nieprawidłowa wartość').should('have.css', 'color', 'rgb(213, 0, 0)'); 
    cy.contains('div','Potwierdź że nie jesteś robotem').should('contain','Potwierdź że nie jesteś robotem');
    cy.contains('div','Potwierdź że nie jesteś robotem').should('have.css', 'color', 'rgb(213, 0, 0)'); 
  });
    
 

  




  })


   

