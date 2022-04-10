/// <reference types="cypress" />

describe('Otwieranie strony Allegro Snadbox', () => {
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
    
          it('Should login user', () => {          
            cy.get('._13q9y > .mpof_5r_x', { timeout: 10000 }).should('be.visible').click();            
            cy.get('._b4f07_1PpAM', { timeout: 10000 }).should('be.visible').click();   
            cy.wait(2000);
           })

           it('Should accept popup', () => {               
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();   
            cy.wait(2000);         
          
           })

           it('Should type user and password', () => {               
            
            cy.wait(3000);         
            cy.get('#login').type('test');
            cy.wait(3000); 
            cy.get('#password').type('test');
            cy.wait(2000); 
           })

           it('Should click login', () => {               
           cy.get('.m7er_56', { timeout: 10000 }).should('be.visible').click(); 
           })
          })
    })

  

     
  
 