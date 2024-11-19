 //selecting option 
describe('Practice Page', () => {
    it('slectmultiple', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1')
        cy.get('#dropdown-class-example').select('option2')    
        cy.get('#dropdown-class-example').select('option3')  
        cy.get('#checkBoxOption1').check() 
        cy.get('#checkBoxOption2').check()
        cy.get('#checkBoxOption2').uncheck() 
        cy.get('[value="radio1"]').click();
        cy.get('[value="radio2"]').click();
        cy.get('[value="radio3"]').click();
       

    });

});