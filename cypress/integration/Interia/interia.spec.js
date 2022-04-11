/// <reference types="cypress" />

describe('Otwieranie strony Allegro Snadbox i logowanie', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
            cy.visit('https://www.interia.pl/');             
          })
    })
    
  
    context('testy', () => {
        it('Should accept popup', () => {   
            cy.get('.switch-mail').click();  
            cy.get('#email').clear();
            cy.get('#email').type('email');
            cy.get('#password').type('password');
            cy.get('button.btn').click();
          })
    
      
          })
    })
  
  
  
     
  
  