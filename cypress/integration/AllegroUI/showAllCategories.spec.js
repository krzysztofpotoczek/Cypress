/// <reference types="cypress" />

import "cypress-real-events/support";

describe('Pokazywanie wszystkich kategori', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
             cy.visit('https://allegro.pl.allegrosandbox.pl/');   
            
                    
          })
    })
    
  
    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
        })   
        
  
        it('Should show all categories', () => {         
            cy.get('.mpof_z0.munh_56 > .mgn2_14', { timeout: 10000 }).should('be.visible').click();
            cy.wait(5000);
        })

        it('Should accept popup2', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
        })  

        it('Should show all categories', () => { 
        cy.contains('h1','Wszystkie kategorie - Mapa strony ');
        cy.contains('a','AGD');
        cy.contains('a','Kable');
        cy.contains('a','RAM');
        })
              
        
        it('Should show more', () => {          
            cy.contains('button','Pokaż więcej').click();
        })  

        it('Should show all categories2', () => { 
            cy.contains('a','Komputery');
            cy.contains('a','Smartfony');
            cy.contains('a','Tusze');
            cy.contains('a','Narzędzia');
            })
    
             })
    })
  
  
  
     
  
  