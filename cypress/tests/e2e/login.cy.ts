import LoginPage from '../../support/pages/loginPage'

describe('Login com sucesso', () => {
  it('Login usuário Padrão', () => {
    LoginPage.loginUser(
      'test@test.com',
      'test123'
    )
  })

  it('Login usuário Admin', () => {
    LoginPage.loginUser(
      'admin@test.com',
      'test123'
    )
    LoginPage.isUserAdmin()
  })
})

describe('Login inválido', () => {
  it('Login com email inválido', () => {
    LoginPage.loginUser(
      'errado@test.com',
      'test123'
    )
    LoginPage.isInvalidUser()
  })

  it('Login com senha inválida', () => {
    LoginPage.loginUser(
      'admin@test.com',
      'errado'
    )
    LoginPage.isInvalidUser()
  })

  it('login com e-mail e senha inválida', () => {
    LoginPage.loginUser(
      'errado@test.com',
      'errado'
    )
    LoginPage.isInvalidUser()
  })
})