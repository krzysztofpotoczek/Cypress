/// <reference types="Cypress" />
const dataJson = require('../../fixtures/createuser')

describe('Stworzenie i sprawdzenie użytkownika', () => {
 let token = '4c9e8b2a490da3b4778412f723c00bd2885baa42610eab60a16d6ba4f93d59dd'
let randomText = ""
let randomEmail = ""
    it.only('Creaate user', () => {
        var letterBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=letterBase.charAt(Math.floor(Math.random() * letterBase.length));
        randomEmail = randomText + '@gmail.com'

        cy.fixture('createuser').then((user) =>{
            
            
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: {
                    "name": user.name,
                    "gender": user.gender,
                    "email": randomEmail,
                    "status":user.status
                }
   
            }).then((res)=>{
              
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email', randomEmail)
                expect(res.body).has.property('name',user.name)
                expect(res.body).has.property('status',user.status)
                expect(res.body).has.property('gender',user.gender)
            }).then((res) =>{
                   const userId = res.body.id 
                    cy.log("user id is: " + userId)
                   
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body).has.property('id', userId)
                        expect(res.body).has.property('name',user.name)
                        expect(res.body).has.property('status',user.status)
                        expect(res.body).has.property('email', randomEmail)
                    })
            })
            
        
        })
    })
})