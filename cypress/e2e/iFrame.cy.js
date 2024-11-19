describe('Iframe', () => {
    it('Iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('Mentorship').click()
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('All Access plan').click()
       
    });
}); 