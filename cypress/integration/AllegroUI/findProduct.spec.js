/// <reference types="cypress" />

describe('Znajdowanie produktu przez wyszukiwarkę', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
            cy.visit('https://allegro.pl.allegrosandbox.pl/');             
          })
    })
    

    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();        
            
          })

          it('Should type product', () => {          
            cy.get('._535b5_3gmLS > .mli2_1').type('iPhone 8 512GB');   
            cy.get('._535b5_3gmLS > ._13q9y').click();     
            
          })
    
          it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();        
            
          })

          it('Should contain string iPhone 8 512GB', () => {          
            cy.contains('a','iPhone 8 512GB');        
            
          })
          })
    })

  

     
  
 