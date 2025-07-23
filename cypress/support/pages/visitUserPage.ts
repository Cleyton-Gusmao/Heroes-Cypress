import { selectorsStandardUser } from "../selectors/selectorsStandardUser";

abstract class VisitUserPage {
    static likeHeroVisit() {
        cy.get(selectorsStandardUser.likeButton).first().click()
        cy.get(selectorsStandardUser.modalConfirm).should('contain', 'You must log in to like.')
        cy.get(selectorsStandardUser.buttonOkModal).click()
    }

    static hireHeroVisit() {
        cy.get(selectorsStandardUser.moneyButton).first().click()
        cy.get(selectorsStandardUser.modalConfirm).should('contain', 'You must log in to hire this hero.')
        cy.get(selectorsStandardUser.buttonOkModal).click()
    }
}

export default VisitUserPage