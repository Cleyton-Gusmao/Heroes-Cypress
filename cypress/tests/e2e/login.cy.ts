import LoginPage from '../../support/pages/loginPage'

const loginPage = new LoginPage()

describe('Login com sucesso', () => {
  it('Login usuário Padrão', () => {
    loginPage.loginUser(
      'test@test.com',
      'test123'
    )
  })

  it('Login usuário Admin', () => {
    loginPage.loginUser(
      'admin@test.com',
      'test123'
    )
    loginPage.userAdmin()
  })
})

describe('Login inválido', () => {
  it('Login com email inválido', () => {
    loginPage.loginUser(
      'errado@test.com',
      'test123'
    )
    loginPage.invalidUser()
  })

  it('Login com senha inválida', () => {
    loginPage.loginUser(
      'admin@test.com',
      'errado'
    )
    loginPage.invalidUser()
  })

  it('login com e-mail e senha inválida', () => {
    loginPage.loginUser(
      'errado@test.com',
      'errado'
    )
    loginPage.invalidUser()
  })
})