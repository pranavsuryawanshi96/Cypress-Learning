// describe('aa', () => {     //dynamic dropdown?
//     it('dpp', () => {
//       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//     //   cy.xpath('//input[@id=autocomplete]') xpath   /input[@id=autocomplete][1] if does not find  proper one use index
//     //#autocomplete[placeholder="Type to Select Countries"]

//       cy.get('[placeholder="Type to Select Countries"]').type('Ger')
//       cy.get('#ui-id-224').find(".ui-menu-item-wrapper").each((serch)=>{
//         if((serch.text())=="Germany"){
//             cy.wrap((serch)).click();
//         }
//       })

//     });
// });
describe('DynamicDropdown', () => {
    it('Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[placeholder="Type to Select Countries"]').type('ind')
        cy.get('#ui-id-1').find('.ui-menu-item').each(($ele)=>{      //WORKING
            if(($ele.text())=="British Indian Ocean Territory")
            {
                cy.wrap($ele).click()
            }
        })
    });
});


// describe('DynamicDropdown'), () => {
//   it('Dropdown', () => {
//       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//       cy.get('#autocomplete').type('Ger')           
//       cy.get('#ui-id-18').find('.ui-menu-item-wrapper').each(($ele)=>{
//           if(($ele.text())=="Germany"){
//               cy.wrap($ele).click()
//           }
//       })
//   });
// };

            describe('Dropdown', () => {
              it('serchong', () => {
                cy.visit('https://rahulshettyacademy.com/AutomationPractice/')       //NOT WORKING
                // cy.get('.inputs ui-autocomplete-input').type('Aust')
                 cy.xpath('//input[@id="autocomplete"]').type('Aust')
                // cy.xpath('(//input[@id="autocomplete"])[1]').type('Aust')
                cy.get('#ui-id-1').find('.ui-menu-item-wrapper').each(($sel)=>{
                    if(($sel.text()=="Australia")){
                      cy.wrap($sel).click()
                    }
                })
              });
            });