describe('template spec', () => {
  it('passes', () => {

    //criando variavel email
    const email = 'email@email.com'

    //criando variavel senha
    const senha = '@Admin1234'

    //ajustando o link do sistema
    cy.visit('http://hlruffo-002-site1.ctempurl.com/')

    //encontre o campo email e passe "email@email"
    cy.get('#Email').type(email)

    //encontre o campo senha e passe "senha" 
    cy.get('#Senha').type(senha)

    //encontre o botão de login e clique
    cy.get('.btn-primary').click()

    //Criar a asserção do teste -> validação 
    //quando logamos é exibido um elemento com o texto "Aplicativo de Finanças"
    //classe .navbar-brand
    cy.get('.navbar-brand').contains('Aplicativo de Finanças').should('be.visible')
    //cy.get('.navbar-brand').should('be.visible')

  })
})