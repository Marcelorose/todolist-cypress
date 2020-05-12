describe('Logout', () => {
    it('Logout process', () => {

        cy.wait(2000)
        
        cy.get('[aria-controls="setting_menu"]').click()

        cy.contains('Sair').click()

        cy.get('.reactist_modal_box__actions.confirm_dialog__actions .ist_button.ist_button_red').then(($btn) => {
            if (cy.get('.reactist_modal_box__actions.confirm_dialog__actions .ist_button.ist_button_red').should('be.visible')) {
                cy.get('.reactist_modal_box__actions.confirm_dialog__actions .ist_button.ist_button_red').click() 
            }
          })


        cy.contains('Entrar')
  
    })
  })
  