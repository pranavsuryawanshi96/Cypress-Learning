describe('mouse', () => {
    // it('invok', () => {
    //    cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
    //   cy.get('#mousehover').invoke('show')
    //        cy.contains('Top').click({force:true})
    //        cy.url().should('include','top')  
    // });
        it('invoke',()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
            cy.get('#mousehover').invoke('show')
            cy.contains('Top').click({force:true})
            cy.url().should('include','top')
        })
 
});