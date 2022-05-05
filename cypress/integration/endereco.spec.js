/// <reference types = "cypress" />

describe('Funcionalidede Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        
        
    });
});