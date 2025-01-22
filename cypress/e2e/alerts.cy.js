describe('rahulshetty', () => {
    it('alerts', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#name').type('Patil');
        cy.get('#alertbtn').click({force:true})
        //  cy.wait(4050)
        cy.on('window:alert',(text)=>{  // to check popup
             expect(text).to.contains('Hello , share this practice page and share your knowledge')
            // expect(text).to.contains('Hello Patil, share this practice page and share your knowledge')

            cy.get('#confirmbtn').click();
            cy.get('#name').type('Patil')
            cy.on('window:Confirm',(confrm)=>{
               expect((confrm)).to.contains('Hello patil, Are you sure you want to confirm?')
            })
                    
        }) 
        
            
      
     });
           
   });
            
 