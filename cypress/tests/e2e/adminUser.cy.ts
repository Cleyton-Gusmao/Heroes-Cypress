import LoginPage from "../../support/pages/loginPage"
import AdminRoles from "../../support/pages/adminRolesPage"

describe('Criando novos heróis', () => {
    it('Herói com o poder de Vôo', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 0',
            '0',
            '0',
            '0',
            0,
            'cypress/fixtures/img/heroi1.png'
        )
        AdminRoles.validateNewHero('Flying')
    })

    it('Herói com o poder de Bola de Fogo', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 1',
            '16',
            '1',
            '1',
            1,
            'cypress/fixtures/img/heroi2.png'
        )
        AdminRoles.validateNewHero('Fireball')
    })

    it('Herói com o poder de Super Força', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 2',
            '25',
            '2',
            '2',
            2,
            'cypress/fixtures/img/heroi3.png'
        )
        AdminRoles.validateNewHero('Super Strength')
    })

    it('Herói com o poder de Invisibilidade', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 3',
            '38',
            '3',
            '3',
            3,
            'cypress/fixtures/img/heroi4.png'
        )
        AdminRoles.validateNewHero('Invisibility')
    })

    it('Herói com o poder de Telecinesia', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 4',
            '42',
            '4',
            '4',
            4,
            'cypress/fixtures/img/heroi5.png'
        )
        AdminRoles.validateNewHero('Telekinesis')
    })

    it('Herói com o poder de Controle da Mente', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 5',
            '51',
            '5',
            '5',
            5,
            'cypress/fixtures/img/heroi6.png'
        )
        AdminRoles.validateNewHero('Mind Control')
    })

    it('Herói com o poder de Super Audição', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 6',
            '69',
            '6',
            '6',
            6,
            'cypress/fixtures/img/heroi7.png'
        )
        AdminRoles.validateNewHero('Super Hearing')
    })

    it('Herói com o poder de Super Logística', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 7',
            '78',
            '7',
            '7',
            7,
            'cypress/fixtures/img/heroi8.png'
        )
        AdminRoles.validateNewHero('Super Logistics')
    })

    it('Herói com o poder de Super Velocidade', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        AdminRoles.createNewHero(
            'Super 8',
            '83',
            '8',
            '8',
            8,
            'cypress/fixtures/img/heroi9.png'
        )
        AdminRoles.validateNewHero('Super Speed')
    })

})

describe.skip('Editando heróis', () => {
    it('Editando usuário', () => {

    })
})

describe('Excluindo heróis', () => {
    it('Exclusão dos hérois criados', () => {
        LoginPage.loginUser(
            'admin@test.com',
            'test123'
        )
        LoginPage.isUserAdmin()
        for (let i = 7; i <= 15; i++) {
            AdminRoles.deleteHero()
        }

    })
})