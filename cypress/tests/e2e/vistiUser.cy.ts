import VisitUserPage from "../../support/pages/visitUserPage";

describe('Realizar ações no modo visitante', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('Tentar curtir heroí no modo visitante', () => {
        VisitUserPage.likeHeroVisit()
    });

    it('Tentar contratar heroí no modo visitante', () => {
        VisitUserPage.hireHeroVisit()
    });
})
