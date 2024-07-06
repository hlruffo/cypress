import {faker} from '@faker-js/faker';

describe('template spec', () => {
    it('passes', () => {
        
        cy.visit('http://hlruffo-002-site1.ctempurl.com/Account/Register')

        cy.get('#Nome').type(faker.person.fullName())

        cy.get('#Email').type(faker.internet.email())

        cy.get('#Senha').type('@Admin1234')

        cy.get('#SenhaConfirmacao').type('@Admin1234')

        cy.get('.btn-primary').click()

        cy.get('.alert > strong').should('contain', 'sucesso!')

    })
})