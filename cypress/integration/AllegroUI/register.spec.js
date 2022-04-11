/// <reference types="cypress" />

describe('Rejestracja', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
            cy.visit('https://allegro.pl.allegrosandbox.pl/');             
          })
    })
    

    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();        
            cy.wait(2000);
          })
    
          it('Should show register form', () => {          
            cy.get('._13q9y > .mpof_5r_x', { timeout: 10000 }).should('be.visible').click();   
            cy.get('.m7er_k4 > .mryx_0 > .mgn2_14').click();   
            cy.wait(4000);
            
           })

           it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();   
            cy.wait(2000);
        
          })

          it('Should complete the form', () => {          
               
            cy.contains('h1','Zarejestruj');
            cy.get('[data-testid="email-input"]').type('krzystest@gmail.com');
            cy.get('#password').type('test1223E#@');
            cy.get('.m3h2_0 > .so24od > .soh923 > ._9hx3e').click();
            cy.get('[for="agreementTerm"]').click();
            cy.get('.mjru_0k_s').click();
          })

          it('Should contain confirmation of sending an email', () => { 
            cy.contains('h3','Wysłaliśmy Ci e-mail');
            cy.contains('span','Sprawdź swoją pocztę');
            cy.contains('strong','krzystest@gmail.com');
          })
           
       
          })
    })

  

     
  
 