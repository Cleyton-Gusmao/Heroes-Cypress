import LoginPage from "../../support/pages/loginPage"
import AdminRoles from "../../support/pages/adminRolesPage"
import userData from "../../fixtures/userData.json"

describe('Criando novos heróis', () => {
    beforeEach(() => {
        cy.session('admin-session', () => {
            LoginPage.loginUser(
                userData.userAdmin.email,
                userData.userAdmin.password)
            LoginPage.isUserAdmin()
        })
    })

    it('Herói com o poder de Vôo', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiVoo.name,
            userData.superHeroiVoo.price,
            userData.superHeroiVoo.fans,
            userData.superHeroiVoo.saves,
            userData.superHeroiVoo.power,
            userData.superHeroiVoo.avatar
        )
        AdminRoles.validateNewHero('Flying')
    })

    it('Herói com o poder de Bola de Fogo', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiFireBall.name,
            userData.superHeroiFireBall.price,
            userData.superHeroiFireBall.fans,
            userData.superHeroiFireBall.saves,
            userData.superHeroiFireBall.power,
            userData.superHeroiFireBall.avatar
        )
        AdminRoles.validateNewHero('Fireball')
    })

    it('Herói com o poder de Super Força', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiStrength.name,
            userData.superHeroiStrength.price,
            userData.superHeroiStrength.fans,
            userData.superHeroiStrength.saves,
            userData.superHeroiStrength.power,
            userData.superHeroiStrength.avatar
        )
        AdminRoles.validateNewHero('Super Strength')
    })

    it('Herói com o poder de Invisibilidade', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiInvisibility.name,
            userData.superHeroiInvisibility.price,
            userData.superHeroiInvisibility.fans,
            userData.superHeroiInvisibility.saves,
            userData.superHeroiInvisibility.power,
            userData.superHeroiInvisibility.avatar
        )
        AdminRoles.validateNewHero('Invisibility')
    })

    it('Herói com o poder de Telecinesia', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiTelekinesis.name,
            userData.superHeroiTelekinesis.price,
            userData.superHeroiTelekinesis.fans,
            userData.superHeroiTelekinesis.saves,
            userData.superHeroiTelekinesis.power,
            userData.superHeroiTelekinesis.avatar
        )
        AdminRoles.validateNewHero('Telekinesis')
    })

    it('Herói com o poder de Controle da Mente', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiMindControl.name,
            userData.superHeroiMindControl.price,
            userData.superHeroiMindControl.fans,
            userData.superHeroiMindControl.saves,
            userData.superHeroiMindControl.power,
            userData.superHeroiMindControl.avatar
        )
        AdminRoles.validateNewHero('Mind Control')
    })

    it('Herói com o poder de Super Audição', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiHearing.name,
            userData.superHeroiHearing.price,
            userData.superHeroiHearing.fans,
            userData.superHeroiHearing.saves,
            userData.superHeroiHearing.power,
            userData.superHeroiHearing.avatar
        )
        AdminRoles.validateNewHero('Super Hearing')
    })

    it('Herói com o poder de Super Logística', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiLogistics.name,
            userData.superHeroiLogistics.price,
            userData.superHeroiLogistics.fans,
            userData.superHeroiLogistics.saves,
            userData.superHeroiLogistics.power,
            userData.superHeroiLogistics.avatar
        )
        AdminRoles.validateNewHero('Super Logistics')
    })

    it('Herói com o poder de Super Velocidade', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiSuperSpeed.name,
            userData.superHeroiSuperSpeed.price,
            userData.superHeroiSuperSpeed.fans,
            userData.superHeroiSuperSpeed.saves,
            userData.superHeroiSuperSpeed.power,
            userData.superHeroiSuperSpeed.avatar
        )
        AdminRoles.validateNewHero('Super Speed')
    })

})

describe('Excluindo heróis', () => {
    it('Exclusão dos hérois criados', () => {
        LoginPage.loginUser(
            userData.userAdmin.email,
            userData.userAdmin.password
        )
        LoginPage.isUserAdmin()
        for (let i = 7; i <= 15; i++) {
            AdminRoles.deleteHero()
        }

    })
})

describe('Editando heróis', () => {

    beforeEach(() => {
        cy.session('admin-session', () => {
            LoginPage.loginUser(
                userData.userAdmin.email,
                userData.userAdmin.password
            )
            LoginPage.isUserAdmin()
        })
    })


    it('Editando Herói', () => {
        LoginPage.visitSistem()
        AdminRoles.createNewHero(
            userData.superHeroiSuperSpeed.name,
            userData.superHeroiSuperSpeed.price,
            userData.superHeroiSuperSpeed.fans,
            userData.superHeroiSuperSpeed.saves,
            userData.superHeroiSuperSpeed.power,
            userData.superHeroiSuperSpeed.avatar
        )
        AdminRoles.editHero(
            userData.superHeroiTelekinesis.name,
            userData.superHeroiTelekinesis.price,
            userData.superHeroiTelekinesis.fans,
            userData.superHeroiTelekinesis.saves,
            userData.superHeroiTelekinesis.power
        )
    })

    it('Exclusão do usuário editado', () => {
        LoginPage.visitSistem()
        AdminRoles.deleteHeroEdit()
    });
})
