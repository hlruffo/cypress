require('cypress-xpath')

describe('template spec', () => {
  it('passes', () => {
    
   //criando variavel email'
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

   cy.xpath('//*[@id="navbarSupportedContent"]/ul/li[2]/a').click()
  
   cy.get('#Nome').type('Conta de luz')

   cy.get('#Data').type('2024-07-01')
   
   cy.get('#Valor').type('100')
  
   cy.get(':nth-child(3) > #Tipo').click()
   //cy.get('input[name="Tipo"][value="1"]').check() ALTERANDO A FORMA DE SELECIONAR O RADIO BUTTON

   cy.get('#Descricao').type('Conta de luz do mês de julho')

   cy.get('#CategoriaId').select('DESPESAS DE CASA')

   cy.get('.btn').click()

   //cy.get('.alert > strong').should('contain', 'Movimentação cadastrada com sucesso.')
   //ALTERNATIVA USANDO XPATH
   cy.xpath('/html/body/div[1]/strong').contains('Movimentação cadastrada com sucesso').should('be.visible')


  })
})