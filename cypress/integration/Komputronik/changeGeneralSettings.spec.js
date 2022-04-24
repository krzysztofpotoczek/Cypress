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

    for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

describe('Otwieranie strony Komputronik i zmiana ogólnych ustawień konta ', () => {
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

   
    it("Should change general settings", () => {
        cy.get('.header__user-account > a > label', { timeout: 20000 }).should('be.visible').click();
        cy.get('#login').type('testcypresspwsz@gmail.com');
        cy.get('#password').type('Testcypress.12345');
        cy.contains('button','Zaloguj się').click();
        cy.get('.webpush-followup-close', { timeout: 20000 }).should('be.visible').click(); 
        cy.get('.header__user-account > a > label').click();
        cy.url().should('include', '/customer/account#!');
        cy.contains('a','Ustawienia ogólne').click();
        cy.url().should('include', '/customer/account#!/settings');
        cy.get('.col-xs-18 > .row > .ui-select-container > .selectize-input > .ui-select-match > [ng-hide="$select.isEmpty() || $select.open"]').click();
        cy.contains('span','Alfabetycznie Z-A').click();
        cy.get('.col-xs-10 > .row > .ui-select-container > .selectize-input > .ui-select-match > [ng-hide="$select.isEmpty() || $select.open"]').click();
        cy.contains('span','20').click();
        cy.contains('button','Zapisz zmiany').click();
        cy.get('.global-alert > span').should('contain','Ustawienia ogólne zostały zmienione.')
        .and('have.css', 'color', 'rgb(62, 142, 28)')

        cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)')
        

        ////////////////////Set Default
        cy.url().should('include', '/customer/account#!/settings');
        cy.get('.col-xs-18 > .row > .ui-select-container > .selectize-input > .ui-select-match > [ng-hide="$select.isEmpty() || $select.open"]').click();
        cy.contains('span','Domyślnie').click();
        cy.get('.col-xs-10 > .row > .ui-select-container > .selectize-input > .ui-select-match > [ng-hide="$select.isEmpty() || $select.open"]').click();
        cy.contains('span','10').click();
        cy.contains('button','Zapisz zmiany').click();
        cy.get('.global-alert > span').should('contain','Ustawienia ogólne zostały zmienione.')
        .and('have.css', 'color', 'rgb(62, 142, 28)')

        cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)')
        
    });

 
  
});