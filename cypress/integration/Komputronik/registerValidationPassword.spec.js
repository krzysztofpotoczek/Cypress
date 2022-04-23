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
    cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click();            
  });

 

  it("Should open /register", () => {
    cy.get('.header__user-account > a > label').click();
    cy.get(':nth-child(3) > .btn3 > strong').click();
  });

  it("Should check URL", () => {
    cy.url().should('include', '/register');
      
  });

  it("Should register and check validation", () => {
    cy.get('.col-lg-10 > .ng-valid-email').type('krzys@gmail.com');
    cy.get('.strength-meter-wrap > .form-control').type('krzys@gmail.com');
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.get(':nth-child(1) > .checkbox').click();
    cy.get('.col-md-15 > .btn > .primary').click();
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'color', 'rgb(85, 89, 92)');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'background-color', 'rgb(207, 255, 187)');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'border-color', 'rgb(116, 195, 84)');
    cy.get('.strength-meter-wrap > .form-control');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'background-color', 'rgb(207, 255, 187)');
    cy.get('.col-lg-10 > .ng-valid-maxlength').should('have.css', 'border-color', 'rgb(116, 195, 84)');
    cy.contains('div','minimum 6 znaków, przynajmniej jedna cyfra i jedna litera').should('contain','minimum 6 znaków, przynajmniej jedna cyfra i jedna litera');
    cy.contains('div','minimum 6 znaków, przynajmniej jedna cyfra i jedna litera').should('have.css', 'color', 'rgb(213, 0, 0)'); 
    cy.contains('div','Potwierdź że nie jesteś robotem').should('contain','Potwierdź że nie jesteś robotem');
    cy.contains('div','Potwierdź że nie jesteś robotem').should('have.css', 'color', 'rgb(213, 0, 0)'); 
  });
    
 

  




  })


   

