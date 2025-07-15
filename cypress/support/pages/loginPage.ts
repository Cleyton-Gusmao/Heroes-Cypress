const selectorsLoginPage = {
    loginModal: "div.modal.shadow-lg",
    loginButton: "nav button:contains('Login')",
    emailField: "[data-cy='email']",
    passwordField: "[data-cy='password']",
    signInButton: "form[novalidate] button:contains('Sign in')",
    editButton: "[data-cy='pencil']",
    trashButton: "[data-cy='trash']",
    likeButton: "[data-cy='like']",
    moneyButton: "[data-cy='money']",
    logoutButton: "nav button:contains('Logout')"
}

abstract class LoginPage {

    static visitSistem() {
        cy.visit('http://localhost:3000')
    }

    static loginUser(email: string, senha: string) {
        cy.visit('http://localhost:3000')

        cy.get(selectorsLoginPage.loginButton).click()
        cy.get(selectorsLoginPage.loginModal)
        cy.get(selectorsLoginPage.emailField).type(email)
        cy.get(selectorsLoginPage.passwordField).type(senha)
        cy.get(selectorsLoginPage.signInButton).click()
        cy.log('Login Realizado com sucesso!')
        cy.location('pathname').should('equal', '/heroes')
        cy.get(selectorsLoginPage.likeButton)
        cy.get(selectorsLoginPage.moneyButton)
    }

    static isUserAdmin() {
        cy.get(selectorsLoginPage.editButton)
        cy.get(selectorsLoginPage.trashButton)
    }

    static isInvalidUser() {
        cy.contains("Invalid email or password")
        cy.get(selectorsLoginPage.loginModal)
        cy.get(selectorsLoginPage.loginButton)
        cy.get(selectorsLoginPage.signInButton)
    }

    static logoutUser() {
        cy.get(selectorsLoginPage.logoutButton).click()
        cy.get(selectorsLoginPage.loginButton)
        cy.location('pathname').should('equal', '/heroes')
    }
}


export default LoginPage