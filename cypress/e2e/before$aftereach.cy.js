//beforeeach aftereach
describe('', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    });
    it('admin', () => {
        cy.wait(4000)
        cy.contains('Admin').click()
        cy.url().should('includes','admin')
    });
    it('admin', () => {
        cy.contains('PIM').click()
        cy.url().should('includes','pim')
    });
    
    afterEach(() => {
        cy.get('.oxd-userdropdown-img').click()
        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{
            if(($ele.text())=="Logout"){
                cy.wrap($ele).click()
            }
            });
          
    });
});














