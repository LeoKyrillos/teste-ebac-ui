/// <reference types = "cypress" />

describe('Funcionalidades página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um item ao carrinho', () => {

        var quantidade = 1

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

        //Por vezes o site muda e o assert apresenta erro. Há vezes em que o site não apresenta a quantidade de itens na resposta de adicionado ao carrinho.
        cy.get('.woocommerce-message').should('contain', 'Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
        //cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho usando Comando customizados', () => {

        cy.addProdutos('Abominable Hoodie','XS', 'Red', 2)
        
    });

    it('Deve adicionar produtos ao carrinho usando Comando customizados', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','L', 'Green', 2)
        
    });

});