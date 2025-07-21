import LoginPage from "../../support/pages/loginPage"
import AdminRoles from "../../support/pages/adminRolesPage"
import userData from "../../fixtures/userData.json"

type HeroData = {
    name: string
    price: string
    fans: string
    saves: string
    power: number
    avatar: string
}

// Lista de heróis com a chave no JSON + o nome do poder a ser validado
const herois: { key: keyof typeof userData, power: string }[] = [
    { key: "superHeroiVoo", power: "Flying" },
    { key: "superHeroiFireBall", power: "Fireball" },
    { key: "superHeroiStrength", power: "Super Strength" },
    { key: "superHeroiInvisibility", power: "Invisibility" },
    { key: "superHeroiTelekinesis", power: "Telekinesis" },
    { key: "superHeroiMindControl", power: "Mind Control" },
    { key: "superHeroiHearing", power: "Super Hearing" },
    { key: "superHeroiLogistics", power: "Super Logistics" },
    { key: "superHeroiSuperSpeed", power: "Super Speed" }
]

describe('Criando novos heróis', () => {
    beforeEach(() => {

        // Login conta admin antes de cada teste
        cy.session('admin-session', () => {
            LoginPage.loginUser(
                userData.userAdmin.email,
                userData.userAdmin.password)
            LoginPage.isUserAdmin()
        })
    })



    // Para cada herói da lista, excuta um testes de criação
    herois.forEach((heroi) => {
        it(`Cria herói com poder de ${heroi.power}`, () => {
            LoginPage.visitSistem()
            const dados = userData[heroi.key] as HeroData
            AdminRoles.createNewHero(
                dados.name,
                dados.price,
                dados.fans,
                dados.saves,
                dados.power,
                dados.avatar
            )
            AdminRoles.validateNewHero(heroi.power)
        })
    })
})


describe('Excluindo heróis', () => {
    it('Exclusão dos hérois criados', () => {
        LoginPage.loginUser(
            userData.userAdmin.email,
            userData.userAdmin.password
        )
        LoginPage.isUserAdmin()
        // A exclusão ocorre a partir do sétimo herói criado, já que por padrão possui 6 heróis criados
        for (let i = 7; i <= 14; i++) {
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
    })
})
