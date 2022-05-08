/// <reference types="Cypress" />

describe('Pobieranie statusu koszyka',() => {

   
 
    it('Get login status', () => {
        cy.request({
            method : 'GET',
            url : 'https://www.komputronik.pl/frontend-api/cart/summary',
           
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.cart_contents_sum_gross).to.eq("0 zł")
            expect(res.body.cart_contents_sum_net).to.eq("0 zł")
            expect(res.body.buy_installments).to.eq(false)
            expect(res.body.compartment_type).to.eq(2)
           
            

        })    
    })  
})

