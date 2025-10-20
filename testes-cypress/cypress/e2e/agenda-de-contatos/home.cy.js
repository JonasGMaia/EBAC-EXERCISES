//<reference types="cypress"/> 

describe('Testes para Home', () => {
    
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar Genésio à lista de contatos', () => {
        
        cy.get('#root > div > div > div:nth-child(1) > form > input[type=text]:nth-child(1)').type('Genésio')
        cy.get('#root > div > div > div:nth-child(1) > form > input[type=email]:nth-child(2)').type('genesio@gmail.com')
        cy.get('#root > div > div > div:nth-child(1) > form > input[type=tel]:nth-child(3)').type('9999999999')
        cy.get('#root > div > div > div:nth-child(1) > form > div > button').click()
    })

    it('Deve editar gian para Professor Gian', () => {
        
        cy.get('#root > div > div > div:nth-child(2) > div.sc-gueYoa.jWEbWB > button.edit').click()
        cy.get('#root > div > div > div:nth-child(1) > form > input[type=text]:nth-child(1)').clear().type('Professor Gian Souza')
        cy.get('.alterar').click()
        cy.get('#root > div > div > div:nth-child(2) > div.sc-dmqHEX.frIrmM > ul > li:nth-child(1)').should('contain', 'Professor Gian Souza')
    })

    it('Deve remover o terceiro item', () => {
        cy.get('#root > div > div > div:nth-child(3) > div.sc-gueYoa.jWEbWB > button.delete').click()
    })

    it('Deve renderizar 3 contatos', () => {
        
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })
})