describe('template spec', () => {
  it('loads the header', () => {
    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.contains('span', "{JSON} Placeholder").should('be.visible')
  })

  it('loads the ad', () => {
    cy.visit('https://jsonplaceholder.typicode.com/')
    cy.contains('a', "Check my new project").should('be.visible')
  })
})