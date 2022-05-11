/// <reference types = "cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidede Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        EnderecoPage.editarEnderecoFaturamento('Manoel', 'Oliveira', 'BBV', 'Brasil', 'Rua 2', 23, 'Olinda', 'Pernambuco', '12350484', '999854562', 'manu@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {

        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].cidede,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email            
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    });

    it.only('Deve fazer cadastro de entrega com sucesso - Usando arquivos de dados', () => {

        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].pais,
            dadosEndereco[3].endereco,
            dadosEndereco[3].numero,
            dadosEndereco[3].cidede,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        


        
    });

});