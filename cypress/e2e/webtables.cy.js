describe('automating webtables', () => {
    it('tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@name="courses"]/tbody/tr[5]/td[2]').then(($ele)=>{
            if($ele.text()=="WebSecurity Testing for Beginners-QA knowledge to next level")
            {
                cy.log($ele.text())
            }
             else{
                cy.log((ele.text()))
             }
        })
        
    });
});
describe('automating webtables', () => {
    it('tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[5]/td[3]').then(($ele)=>{
            if($ele.text()=="Chennai")
            {
                cy.log($ele.text())
            }
            else{
                cy.log($ele.text())
            }
        })
    });
});