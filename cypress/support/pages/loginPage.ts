
const selectors = {
    loginModal: "div.modal.shadow-lg",
    loginButton: "nav button:contains('Login')",
    emailField: "[data-cy='email']",
    passwordField: "[data-cy='password']",
    signInButton: "form[novalidate] button:contains('Sign in')",
    editButton: "[data-cy='pencil']",
    trashButton: "[data-cy='trash']",
    likeButton: "[data-cy='like']",
    moneyButton: "[data-cy='money']"
}

abstract class LoginPage {

    static visitSistem() {
        cy.visit('http://localhost:3000')
    }

    static loginUser(email: string, senha: string) {
        cy.visit('http://localhost:3000')

        cy.get(selectors.loginButton).click()
        cy.get(selectors.loginModal)
        cy.get(selectors.emailField).type(email)
        cy.get(selectors.passwordField).type(senha)
        cy.get(selectors.signInButton).click()
        cy.log('Login Realizado com sucesso!')
        cy.location('pathname').should('equal', '/heroes')
        cy.get(selectors.likeButton)
        cy.get(selectors.moneyButton)
    }

    static isUserAdmin() {
        cy.get(selectors.editButton)
        cy.get(selectors.trashButton)
    }

    static isInvalidUser() {
        cy.contains("Invalid email or password")
        cy.get(selectors.loginModal)
        cy.get(selectors.loginButton)
        cy.get(selectors.signInButton)
    }
}


export default LoginPage