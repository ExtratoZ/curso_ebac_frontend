/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })
  it('Deve adicionar um novo contato', () => {
    // Lógica para testar a adição de um novo contato
    cy.get('input[type="text"]').type('Biridin')
    cy.get('input[type="email"]').type('biridin@gmail.com')
    cy.get('input[type="tel"]').type('55999999999')
    cy.get('.adicionar').click()
    expect(cy.get('.sc-iAEyYk').contains('Biridin')).to.exist
  })

  it('Deve editar um contato existente', () => {
    // Lógica para testar a edição de um contato existente
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('input[type="text"]').clear().type('Gian Souza')
    cy.get('.alterar').click()
    expect(cy.get('.sc-iAEyYk').contains('Gian Souza')).to.exist
  })

  it('Deve remover um contato', () => {
    // Lógica para testar a remoção de um contato
    cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    cy.get('.sc-iAEyYk').should('not.contain', 'Bruna Costa')
  })
})