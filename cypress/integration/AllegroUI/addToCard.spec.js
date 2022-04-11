/// <reference types="cypress" />

import "cypress-real-events/support";

describe('Dodawanie produktu do koszyka', () => {
    context('uruchomienie strony', () => {
        it('Should open https://allegro.pl.allegrosandbox.pl/ ', () => {            
             cy.visit('https://allegro.pl.allegrosandbox.pl/');   
             //cy.visit(' https://allegro.pl.allegrosandbox.pl/oferta/iphone-8-512gb-space-grey-7688401701');   
                    
          })
    })
    
  
    context('testy', () => {
        it('Should accept popup', () => {          
            cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
        })   
        
    //     it('Should show categories', () => {          
    //        cy.wait(2000);
    //         cy.get('[data-group-id="departments_Elektronika"] > .mgn2_14 > .mjyo_6x > image').trigger('mouseover');
    //         cy.get('[data-box-name="header-layer-electronics-desktop-nav:category1"] > ._f428b_2koL0 > ._f428b_NXQqN > :nth-child(1) > ._f428b_1-Sq1 > :nth-child(1) > .mgn2_14').click()
    //         cy.wait(2000);
    //         cy.get('[data-group-id="departments_Elektronika"] > .mgn2_14 > .mjyo_6x > image').invoke('show');
    //         cy.get('[data-box-name="header-layer-electronics-desktop-nav:category1"] > ._f428b_2koL0 > ._f428b_NXQqN > :nth-child(1) > ._f428b_1-Sq1 > :nth-child(1) > .mgn2_14').click()
    //         cy.wait(2000);
    //         cy.get('[data-group-id="departments_Elektronika"] > .mgn2_14 > .mjyo_6x > image').realHover();
    //         cy.get('[data-box-name="header-layer-electronics-desktop-nav:category1"] > ._f428b_2koL0 > ._f428b_NXQqN > :nth-child(1) > ._f428b_1-Sq1 > :nth-child(1) > .mgn2_14').click()
    //   })  
    it('Should show all categories', () => {          
        cy.get('.mpof_z0.munh_56 > .mgn2_14', { timeout: 10000 }).should('be.visible').click();
        cy.contains('h1','Wszystkie kategorie - Mapa strony ');
        
    }) 
          
    it('Should accept popup', () => {          
        cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
    })   
       
    it('Should show list of categories', () => {          
        cy.get('[data-box-name="Elektronika - Expander"] > [data-role="opbox-expander"] > .mpof_ki > ._a5520_1Qmo0 > [data-role="opbox-expander-expand-button"]', { timeout: 10000 }).should('be.visible').click();
        cy.get('[data-box-name="Elektronika - Linki"] > ._f428b_CaabZ > ._f428b_NXQqN > :nth-child(73) > .mgn2_14', { timeout: 10000 }).should('be.visible').click();
        
        
    })   


    it('Should accept popup', () => {          
        cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
    }) 


   
    it('Should choose iPhone', () => {          
        cy.get('[data-analytics-view-value="7688401701"] > .mqen_m6 > ._6a66d_oLBtv > ._6a66d_2Nhzm > .mgn2_14 > ._w7z6o').click();
        
    }) 

    it('Should accept popup', () => {          
        cy.get('._jkrtd > .mgmw_9u', { timeout: 10000 }).should('be.visible').click();
        
    }) 

    it('Should add to card', () => {   
         
        cy.get('button[id="add-to-cart-button"]', { timeout: 10000 }).should('be.visible').click();
    })


   
             })
    })
  
  
  
     
  
  