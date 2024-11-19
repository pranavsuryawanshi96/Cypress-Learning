
describe('template spec', () => {
  it('passes', () => {
   cy.request({
    method: 'Get',
    url :   'https://simple-books-api.glitch.me/status',
    Headers : {
         contenType : 'application/json'
    }
   })               
         .then((ve)=>{
          expect(ve.status).to.eq(200)
             cy.log(ve.status)
         })
  })
}) 
describe('aopi', () => {
  it('pp', () => {
    cy.request({
      metthod:'Post',
      url:'https://catfact.ninja/fact',
      body:{
    "fact":"Edwadfffrd Lear, author of \\The Owl and the Pussycat\\\"\", is said to have had his new house in San Remo built to exactly the same specification as his previous residence, so that his much-loved tabby, Foss, would immediately feel at home.\"\"\"",
     "length":23655
      },
      Headers :{
        contenType: 'application/json'
      }
    })
        .then((respose)=>{
          expect(respose.status).to.eq(200)
          cy.log(respose.status)
        })

  });
});