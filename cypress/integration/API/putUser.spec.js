/// <reference types="Cypress" />
const dataJson = require('../../fixtures/createuser')

describe('Edycja użytkownika', () => {
    let token = '4c9e8b2a490da3b4778412f723c00bd2885baa42610eab60a16d6ba4f93d59dd'
    let randomText = ""
    let randomEmail = ""
        it.only('Creaate user', () => {
            var letterBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            for (var i = 0; i < 10; i++)
            randomText+=letterBase.charAt(Math.floor(Math.random() * letterBase.length));
            randomEmail = randomText + '@gmail.com'
    
            
            
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: {
                    "name":"krzys pwsz",
                    "gender":"male",
                    "email": "krzys917@gmail.com",
                    "status":"active"
                  }
   
            }).then((res)=>{
           
                expect(res.status).to.eq(201)
                expect(res.body).has.property('name','krzys pwsz')
                expect(res.body).has.property('gender','male')
                expect(res.body).has.property('email', 'krzys917@gmail.com')
                expect(res.body).has.property('status','active')       
                
            }).then((res) =>{
                   const userId = res.body.id 
                    cy.log("User id is: " + userId)
                   
                    cy.request({
                        method: 'PUT',
                        url: 'https://gorest.co.in/public/v2/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                        body: {
                            "name":"krzys pwsz Updated",
                            "gender":"male",
                            "email": randomEmail,
                            "status":"inactive"
                          }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body).has.property('name','krzys pwsz Updated')
                        expect(res.body).has.property('gender','male')
                        expect(res.body).has.property('email', randomEmail)
                        expect(res.body).has.property('status','inactive')
                       
                    })
            })
            
        
        
    })
})