import VisitUserPage from "../../support/pages/visitUserPage";

describe('', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('Curtir heroí no modo visitante', () => {
        VisitUserPage.likeHeroVisit()
    });

    it('Contratar heroí no modo visitante', () => {
        VisitUserPage.hireHeroVisit()
    });
})
