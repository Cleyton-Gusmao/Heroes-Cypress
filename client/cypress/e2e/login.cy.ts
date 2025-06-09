describe('Login com sucesso', () => {
  it('Login usuário Padrão', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.text-white').click()
  })

    it('Login usuário Admin', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.text-white').click()
    cy.get('[data-cy="pencil"]')
    cy.get('[data-cy="trash"]')
  })
})

describe('Login inválido', () => {
  it ('Login com email inválido', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').click()
    cy.get('[data-cy="email"]').type('errado@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.text-white').click()
    cy.get('.text-red-500')
    cy.get('.rounded-md')
  })

    it('Login com senha inválida', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('errado')
    cy.get('.text-white').click()
    cy.get('.text-red-500')
    cy.get('.rounded-md')
  })

  it('login com e-mail e senha inválida', () =>{
    cy.visit('http://localhost:3000')
    cy.get('nav').click()
    cy.get('[data-cy="email"]').type('errado@test.com')
    cy.get('[data-cy="password"]').type('errado')
    cy.get('.text-white').click()
    cy.get('.text-red-500')
    cy.get('.rounded-md')
  })
})