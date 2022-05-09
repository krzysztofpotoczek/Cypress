/// <reference types="cypress" />

describe('Logowanie i potwierdzenie zgody na otrzymywanie ofert', () => {

const login = (name, password) => { 
 cy.session([name,password], () => {
  cy.visit("https://www.komputronik.pl/product/722545/garett-kids-sweet-2-czarny.html"); 
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

      
  
    

      it("Should logIn and accept consent", () => { 
     
        login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/");
        cy.get('.webpush-followup-close', { timeout: 15000 }).should('be.visible').click();        
        cy.get('.header__user-account > a > label', { timeout: 15000 }).should('be.visible').click();  
        cy.url().should('include', '/customer/account#!/');
        cy.get('.rodo-menu-label').click();
        cy.url().should('include', '/customer/account#!/customerConsents');
        cy.get('.checkbox').click();
        cy.get('.rodo-actions > span > button').click();
        cy.get('.global-alert > span').should('contain','Twoje zgody zostały zmienione.');
        cy.get('.global-alert').should('have.css', 'background-color', 'rgb(233, 249, 227)');
        cy.get('.global-alert').should('have.css', 'color', 'rgb(62, 142, 28)');
      });   
         

      it("Should change general settings", () => {
        
        login('testcypresspwsz@gmail.com','Testcypress.12345');
        cy.visit("https://www.komputronik.pl/customer/account#!/settings");
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
  

  

  
     
  
  