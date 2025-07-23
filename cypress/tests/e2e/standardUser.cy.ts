import LoginPage from "../../support/pages/loginPage"
import StandardUserRoles from "../../support/pages/standardUserPage"
import userData from "../../fixtures/userData.json"


describe('Funções usuário padrão', () => {

    beforeEach(() => {
        LoginPage.loginUser(
            userData.userStandard.email,
            userData.userStandard.password
        )
    })

    it('Curtir herói da lista e validar contagem de curtida', () => {
        LoginPage.visitSistem()
        StandardUserRoles.likeHero()
    })

    it('Contratar herói da lista e validar contagem de contatos', () => {
        LoginPage.visitSistem()
        StandardUserRoles.savesHero()
    })
})