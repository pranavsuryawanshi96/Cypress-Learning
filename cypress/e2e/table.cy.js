describe('Table', () => {
    it('tbale selecting', () => {
          cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
          cy.xpath('//table[@name="courses"]/tbody/tr[4]/td[2]').then((se)=>{
            if(se.text()=="Appium (Selenium) - Mobile Automation Testing from Scratch"){
                 cy.log((se))
            }
            else{
                cy.log((se))
            }
          })
          cy.xpath('//table[@name="courses"]/tbody/tr[4]/td[2]').then((se)=>{
            if(se.text()=="Appium (Selenium) - Mobile Automation Testing from Scratch"){
                 cy.log((se))
            }
            else{
                cy.log((se))
            }
          })
            cy.xpath('//table[@id="product"]/tbody/tr[5]/td[2]').then((se1)=>{
              if((se1.text()=="Engineer")){
                cy.log((se1))
              } 
              else{
                cy.log((se1))
              }
            
            })
    });
});