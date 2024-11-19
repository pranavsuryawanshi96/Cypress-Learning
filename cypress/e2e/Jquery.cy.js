describe('simple form', () => {
    it('name', () => {
       cy.visit('https://v1.training-support.net/selenium/simple-form')
      cy.get('#firstName').then((uname)=>{
       expect(uname).to.have.attr('placeholder','First Name')
       cy.wrap(uname).type('hhii')
      })
    });

        it('last name', () => {
          cy.visit('https://v1.training-support.net/selenium/simple-form')
          cy.get('#lastName').then((lstnme)=>{
          expect(lstnme).to.have.attr('placeholder','Last Name')
          cy.wrap(lstnme).type('byy')
        })
        });
        it('email', () => {
      cy.visit('https://v1.training-support.net/selenium/simple-form')
      cy.get('#email').then((mail)=>{
      expect(mail).to.have.attr('placeholder','abc@xyz.com')
      cy.wrap(mail).type('pp@gmail.com')
      })
        });
        it('contact no ', () => {
          cy.visit('https://v1.training-support.net/selenium/simple-form')
          cy.get('#number').then((no)=>{
            expect(no).to.have.attr('type','tel')
            cy.wrap(no).type('9066179696')
          }) 
        })
})