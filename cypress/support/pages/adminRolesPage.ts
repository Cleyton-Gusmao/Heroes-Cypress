const selectors = {
    newHeroButton: "[href='/heroes/new']",
    nameField: "[data-cy='nameInput']",
    priceField: "[data-cy='priceInput']",
    fansField: "[data-cy='fansInput']",
    savesField: "[data-cy='savesInput']",
    powersSelector: "[data-cy='powersSelect']",
    avatarFile: "[data-cy='avatarFile']",
    submitButtonNewHero: "button",
    trashButton: "[data-cy='trash']",
    modalConfirmDeleteHero: ".rounded-md",
    optionDeleteHero: ".text-white"
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
        cy.get(selectors.submitButtonNewHero).eq(2).click()
        cy.log('Novo héroi criado com sucesso!')
    }
    
    static deleteHero() {
        cy.location('pathname').should('equal', '/heroes')
        cy.get(selectors.trashButton).last().click()
        cy.get(selectors.modalConfirmDeleteHero)
        cy.get(selectors.optionDeleteHero).eq(1).click()
        cy.log('Herói apagado com sucesso!')
    }

}

export default AdminRoles