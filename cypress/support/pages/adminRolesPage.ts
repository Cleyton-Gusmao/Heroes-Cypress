import { selectorsAdminRoles } from "../selectors/selectorsAdminRoles";

abstract class AdminRoles {

    static createNewHero(name: string, price: string, fans: string, saves: string, power: number, avatar: string) {
        cy.get(selectorsAdminRoles.newHeroButton).click()
        cy.location('pathname').should('equal', '/heroes/new')
        cy.get(selectorsAdminRoles.nameField).type(name)
        cy.get(selectorsAdminRoles.priceField).type(price)
        cy.get(selectorsAdminRoles.fansField).type(fans)
        cy.get(selectorsAdminRoles.savesField).type(saves)
        cy.get(selectorsAdminRoles.powersSelector).select(power)
        cy.get(selectorsAdminRoles.avatarFile).selectFile(avatar)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.log('Novo héroi criado com sucesso!')
    }

    static validateNewHero(powerHero: string) {
        cy.get(selectorsAdminRoles.powerNameHeroCard).last().should('contain', powerHero)
    }

    static deleteHero() {
        cy.location('pathname').should('equal', '/heroes')
        cy.get(selectorsAdminRoles.trashButton).last().click()
        cy.get(selectorsAdminRoles.modalDeleteHero)
        cy.get(selectorsAdminRoles.buttonDeleteHero).click()
        cy.log('Herói excluído com sucesso!')
    }

    static deleteHeroEdit() {
        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.deleteHeroButton).click()
        cy.get(selectorsAdminRoles.modalDeleteHero)
        cy.get(selectorsAdminRoles.buttonDeleteHero).click()
    }

    static editHero(name: string, price: string, fans: string, saves: string, power: number) {
        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.nameField).clear().type(name)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.get(selectorsAdminRoles.nameHeroCard).last().should('contain', name)
        cy.log('Nome do herói alterado com sucesso!')


        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.priceField).clear().type(price)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.get(selectorsAdminRoles.priceHeroCard).last().should('contain', price)
        cy.log('Preço do herói alterado com sucesso!')

        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.fansField).clear().type(fans)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.get(selectorsAdminRoles.fansHeroCard).last().should('contain', fans)
        cy.log('Likes do herói alterado com sucesso!')

        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.savesField).clear().type(saves)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.get(selectorsAdminRoles.savesHeroCard).last().should('contain', saves)
        cy.log('Quantidade contratada do herói alterado com sucesso!')

        cy.get(selectorsAdminRoles.editButton).last().click()
        cy.get(selectorsAdminRoles.powersSelector).select(power)
        cy.get(selectorsAdminRoles.submitButtonNewHero).click()
        cy.get(selectorsAdminRoles.powerNameHeroCard).last().should('contain', 'Telekinesis')
        cy.log('Poder do herói alterado com sucesso!')
        cy.get(selectorsAdminRoles.editButton).last().click()

    }

}

export default AdminRoles