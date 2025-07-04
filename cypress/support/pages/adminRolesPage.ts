const selectors = {
    newHeroButton: "nav a[href='/heroes/new'] button:contains('Create New Hero')",
    nameField: "[data-cy='nameInput']",
    priceField: "[data-cy='priceInput']",
    fansField: "[data-cy='fansInput']",
    savesField: "[data-cy='savesInput']",
    powersSelector: "[data-cy='powersSelect']",
    avatarFile: "[data-cy='avatarFile']",
    submitButtonNewHero: "form[novalidate] button:contains('Submit')",
    trashButton: "[data-cy='trash']",
    modalDeleteHero: "div.modal.shadow-lg",
    buttonDeleteHero: "div button:contains('Yes')", // melhorar seletor
    powerName: "[data-cy='powers']"
}

abstract class AdminRoles {

    static createNewHero(name: string, price: string, fans: string, saves: string, power: number, avatar: string) {
        cy.get(selectors.newHeroButton).click()
        cy.location('pathname').should('equal', '/heroes/new')
        cy.get(selectors.nameField).type(name)
        cy.get(selectors.priceField).type(price)
        cy.get(selectors.fansField).type(fans)
        cy.get(selectors.savesField).type(saves)
        cy.get(selectors.powersSelector).select(power)
        cy.get(selectors.avatarFile).selectFile(avatar)
        cy.get(selectors.submitButtonNewHero).click()
        cy.log('Novo héroi criado com sucesso!')
    }

    static validateNewHero(powerHero: string) {
        cy.get(selectors.powerName).last().should('contain', powerHero)
    }

    static deleteHero() {
        cy.location('pathname').should('equal', '/heroes')
        cy.get(selectors.trashButton).last().click()
        cy.get(selectors.modalDeleteHero)
        cy.get(selectors.buttonDeleteHero).click()
        cy.log('Herói excluído com sucesso!')
    }

}

export default AdminRoles