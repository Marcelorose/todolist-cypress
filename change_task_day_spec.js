describe('Change Task Day', () => {
    
    let taskDesc = 'TESTE AUTOMATIZADO';

    it('New Task Process', () => {
        cy.contains('Caixa de entrada').click()


        cy.get('.action.action_add_item').click()

        cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr span', {force: true}).type(taskDesc)

        cy.contains(taskDesc)

        cy.get('.item_editor_submit.ist_button.ist_button_red').click()
    })


    it('Change Task Day Process', () => {  

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

        cy.contains(taskDesc).click() 

        cy.get('.reactist_modal_box__body .icon_pill').click({force: true})

        cy.get('[data-track="scheduler|date_shortcut_today"]').click({force: true})

        cy.get('.date.date_today').click();

        var d = new Date();

        if((d.getMonth() % 2 == 0 && d.getDate() == 31) || (d.getMonth() % 2 == 1 && d.getDate() == 30)){
            nextDay = 1;
        }

        var nextDay = d.getDate() + 1;

        var fullDate = d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + ((d.getDate() + 1) < 10 ? '0' + (d.getDate() + 1) : d.getDate() + 1);

        cy.get('[aria-label="' + fullDate + '"] .calendar__day__date__number').click()

        cy.contains('Amanhã').should('exist');

        cy.get('.reactist_modal_box__body .icon_close').click()

    })

    it('Complete Task Process', () =>{

        cy.get('.checker.sel_checkbox_td .ist_checkbox').click()
        
    })
})