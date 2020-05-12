describe('Login', () => {
  it('Success Login process', () => {

    cy.visit('https://todoist.com/pt-BR')

    cy.contains('Entrar').click()

    cy.get('#email').clear();
    
    cy.get('#email').type('testeautomatizadocypress@gmail.com').should('have.value', 'testeautomatizadocypress@gmail.com') 

    cy.get('#password').clear();

    cy.get('#password').type('cypress1234').should('have.value', 'cypress1234') 

    cy.get('.sel_login').click() 

    cy.url().should('include', '/app/#start')

  })
})
