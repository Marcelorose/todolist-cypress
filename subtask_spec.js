describe('New SubTask', () => {

    let taskDesc = 'TESTE AUTOMATIZADO';

    it('New Task Process', () => {
        cy.contains('Caixa de entrada').click()

        cy.get('.action.action_add_item').click()

        cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr span', {force: true}).type(taskDesc)

        cy.contains(taskDesc)

        cy.get('.item_editor_submit.ist_button.ist_button_red').click()
    })


    it('New SubTask Process', () => {  

        var subTasks = ['Cypress', 'Login', 'Task'];
        
        cy.contains(taskDesc).click()  
        cy.get('.reactist_modal_box__body .plus_add_button').click()


        for (let i = 0; i < subTasks.length; i++) {
            cy.get('.reactist_modal_box__body .public-DraftStyleDefault-block.public-DraftStyleDefault-ltr span').type(subTasks[i])
            cy.get('.reactist_modal_box__body .item_editor_submit.ist_button.ist_button_red').click()
        }

        for (let i = 0; i < subTasks.length; i++) {
            cy.contains(subTasks[i])
        }

        cy.get('.reactist_modal_box__body .icon_close').click()

    })

    it('Complete Task Process', () =>{

        cy.get('.checker.sel_checkbox_td .ist_checkbox').click()
        
    })
})