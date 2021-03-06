/// <reference types='cypress'/>

const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')

    });
    
    it('Deve completar o pré cadastro com suceesso', () => {

        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker =  faker.internet.email(nomeFaker)


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!!teste.com!!')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve coompletar pré-cadastro com sucesso usando Comandos customizados', () => {

        //Metodo-1
        //let nomeFaker = faker.name.firstName()
        //let sobrenomeFaker = faker.name.lastName()
        //let emailFaker2 =  faker.internet.email(nomeFaker, sobrenomeFaker)
        //cy.preCadastro(emailFaker2, 'senha!@#forte', nomeFaker, sobrenomeFaker)

        //Metodo-2
        let emailFaker2 =  faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Carlos', 'Sobral')

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
        
    });

    
});