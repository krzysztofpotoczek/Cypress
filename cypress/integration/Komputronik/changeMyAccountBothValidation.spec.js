/// <reference types="cypress" />

function textGenerator() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function numberGenerator() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

describe('Otwieranie strony Komputronik, logowanie i zmiana szczegółów konta', () => {
    it("Should handle the alerts automatically", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("https://www.komputronik.pl/");
      //window:confirm is the event which get fired on alert open
      cy.on("window:confirm", (str) => {
        return false;
      });
      cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();              
    });

    it("Should login", () => {
        cy.get('.header__user-account > a > label').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
      }); 


        it("Should change account's details", () => {
        cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click(); 
        cy.get('.header__user-account > a > label').click();
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Dane osobiste').click();
        cy.url().should('include', '/customer/account#!/personal');
        cy.wait(3000);
        cy.get('.col-s360-13 > .row > .form-control').clear().type(numberGenerator());
        cy.get('.col-s360-17 > .row > .form-control').clear().type(textGenerator());
        cy.get('.col-xs-22 > .row > .form-control').clear().type("111111111");
        cy.contains('button','Zapisz zmiany').click();      
        
        cy.get('.col-md-17 > .row > .form-control') //Mail
        .should('have.css', 'border-color', 'rgb(116, 195, 84)')
        .and('have.css', 'background-color', 'rgb(207, 255, 187)');   
        

        cy.get('.col-s360-13 > .row > .form-control') //Name
        .should('have.css', 'background-color', 'rgb(248, 231, 231)')
        .and('have.css', 'border-color', 'rgb(213, 0, 0)');

        cy.get('.form-alert') //error alert
        .should('contain','Nieprawidłowa wartość')
        .and('have.css', 'color', 'rgb(213, 0, 0)');

        cy.get('.col-s360-17 > .row > .form-control') //Surname
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

        cy.get('.col-xs-22 > .row > .form-control') //Phone number
        .should('have.css', 'background-color', 'rgb(207, 255, 187)')
        .and('have.css', 'border-color', 'rgb(116, 195, 84)');

       
       
  
      }); 
});