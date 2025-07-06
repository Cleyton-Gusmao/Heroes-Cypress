import LoginPage from '../../support/pages/loginPage'
import userData from '../../fixtures/userData.json'

describe('Login com sucesso', () => {
  it('Login usuário Padrão', () => {
    LoginPage.loginUser(
      userData.userStandard.email,
      userData.userStandard.password
    )
  })

  it('Login usuário Admin', () => {
    LoginPage.loginUser(
      userData.userAdmin.email,
      userData.userAdmin.password
    )
    LoginPage.isUserAdmin()
  })
})

describe('Login inválido', () => {
  it('Login com email inválido', () => {
    LoginPage.loginUser(
      'errado@test.com',
      userData.userStandard.password
    )
    LoginPage.isInvalidUser()
  })

  it('Login com senha inválida', () => {
    LoginPage.loginUser(
      userData.userAdmin.email,
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