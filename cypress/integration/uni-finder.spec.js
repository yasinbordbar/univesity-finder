/// <reference types="cypress" />
describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays universities correctly', () => {
        const inputName = "Shiraz"
        cy.get('input').type(`${inputName}{enter}`)

        cy.contains("Shiraz University of Technology").should('exist')
        cy.contains("Shiraz University").should('exist')
    })

    it('shows message when there is no university', () => {
        const inputName = "Some random name"
        cy.get('input').type(`${inputName}{enter}`)
        cy.contains("There is no university with this name").should('exist')
    })
})
