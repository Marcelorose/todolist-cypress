describe('New Task', () => {
    it('New Task Process', () => {  

        cy.contains('Caixa de entrada').click()

        let taskDesc = 'TESTE AUTOMATIZADO';

        cy.get('.action.action_add_item').click()

        cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr span', {force: true}).type(taskDesc)

        cy.contains(taskDesc)

        cy.get('.item_editor_submit.ist_button.ist_button_red').click();
        
    })

    it('Complete Task Process', () =>{

        cy.get('.checker.sel_checkbox_td .ist_checkbox').click()
        
    })
  })