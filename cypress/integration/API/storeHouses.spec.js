/// <reference types="Cypress" />

describe('Pobieranie statusu koszyka',() => {

   
 
    it('Get login status', () => {
        cy.request({
            method : 'GET',
            url : 'https://www.komputronik.pl/frontend-api/product/availability/All/722545/1',
           
        }).then((res)=>{

            expect(res.status).to.eq(200)

            for(let i=0; i<100; i++)
            {  
                let id = res.body.storehouses[i].id
                let type = res.body.storehouses[i].type
                let name = res.body.storehouses[i].name
                let proper_name = res.body.storehouses[i].proper_name
                let address = res.body.storehouses[i].address
                let city = res.body.storehouses[i].city       
                let business_days0 = res.body.storehouses[i].business_days[0]
                let business_days1 = res.body.storehouses[i].business_days[1]
                let business_days2 = res.body.storehouses[i].business_days[2]
                let url = res.body.storehouses[i].url
                let phone = res.body.storehouses[i].phone
                let restrictions = res.body.storehouses[i].restrictions
                let canBeOnDisplay = res.body.storehouses[i].canBeOnDisplay
                    
           
          

                expect(res.body.storehouses[i].id).to.eq(id)
                expect(res.body.storehouses[i].type).to.eq(type)
                expect(res.body.storehouses[i].name).to.eq(name)
                expect(res.body.storehouses[i].proper_name).to.eq(proper_name)
                expect(res.body.storehouses[i].address).to.eq(address)
                expect(res.body.storehouses[i].city).to.eq(city)
                expect(res.body.storehouses[i].business_days[0]).to.eq(business_days0)
                expect(res.body.storehouses[i].business_days[1]).to.eq(business_days1)
                expect(res.body.storehouses[i].business_days[2]).to.eq(business_days2)
                expect(res.body.storehouses[i].url).to.eq(url)
                expect(res.body.storehouses[i].phone).to.eq(phone)
                expect(res.body.storehouses[i].restrictions).to.eq(restrictions)
                expect(res.body.storehouses[i].canBeOnDisplay).to.eq(canBeOnDisplay)
            }

          

           
           
            
            
       
        })    
    })  
})

