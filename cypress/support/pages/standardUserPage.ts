import { selectorsStandardUser } from "../selectors/selectorsStandardUser";

abstract class StandardUserRoles {

    static likeHero() {
        cy.get(selectorsStandardUser.fansCount).first().invoke('text').then(text => {
            const fansAntes = Number(text.trim())   // converte o texto em número e apaga os espaços

            cy.get(selectorsStandardUser.likeButton).first().click()
            cy.get(selectorsStandardUser.fansCount).first().should('have.text', String(fansAntes + 1))
        })
    }

    static savesHero() {
        cy.get(selectorsStandardUser.savesCount).first().invoke('text').then(text => {
            const savesAntes = Number(text.trim())

            cy.get(selectorsStandardUser.moneyButton).first().click()
            cy.get(selectorsStandardUser.modalConfirm)
            cy.get(selectorsStandardUser.buttonConfirm).click()
            cy.get(selectorsStandardUser.savesCount).first().should('have.text', String(savesAntes + 1))
        })
    }
}
export default StandardUserRoles