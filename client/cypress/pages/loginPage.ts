
const selectors = {
    loginModal: ".modal",
    loginButton: "nav",
    emailField: "[data-cy='email']",
    senhaField: "[data-cy='password']",
    signInButton: ".text-white",
    editButton: "[data-cy='pencil']",
    trashButton: "[data-cy='trash']",
    textLoginUnsucessful: ".text-red-500"
}

class LoginPage {

    loginUser(email: string, senha: string) {
        cy.visit('http://localhost:3000')

        cy.get(selectors.loginButton).click()
        cy.get(selectors.loginModal)
        cy.get(selectors.emailField).type(email)
        cy.get(selectors.senhaField).type(senha)
        cy.get(selectors.signInButton).click()
    }

    userAdmin() {
        cy.get(selectors.editButton)
        cy.get(selectors.trashButton)
    }

    invalidUser() {
        cy.get(selectors.textLoginUnsucessful)
        cy.get(selectors.loginModal)
    }
}

export default LoginPage