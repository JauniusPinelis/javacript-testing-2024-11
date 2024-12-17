describe('Contact us functionality', () => {
  it('shows success message when registration is successful', () => {
    cy.visit('https://www.automationexercise.com/');

    // Click on contacts us button.
    cy.contains(" Contact us").click()

    // we get redirected to a new page.

    // Fill registration form.
    cy.get('[data-qa="name"]').type('jaunius pinelis')
    cy.get('[data-qa="email"]').type('jauniuspinelis@gmail.com')
    cy.get('[data-qa="subject"]').type('testing')
    cy.get('[data-qa="message"]').type('testing message')

    // Click on submit

    cy.get('[data-qa="submit-button"]').click()

    // Pop up windows appears and we click OK

    // Do we get 'Success! Your details have been submitted successfully.'
    cy.contains('div', "Success! Your details have been submitted successfully.").should('be.visible')
  })
})

// describe('Testing functionality 1', () => {
//   it('loads the header 1', () => {
//     cy.visit('https://jsonplaceholder.typicode.com/')
//     cy.contains('span', "{JSON} Placeholder").should('be.visible')
//   })

//   it('loads the ad 2', () => {
//     cy.visit('https://jsonplaceholder.typicode.com/')
//     cy.contains('a', "Check my new project").should('be.visible')
//   })

//   it('loads the ad 3', () => {
//     cy.visit('https://jsonplaceholder.typicode.com/')
//     cy.contains('a', "Check my new project").should('be.visible')
//   })
// })

// describe('Testing functionality 2', () => {
//   describe("Inner functionality 4", () => {
//     it('loads the header 1', () => {
//       cy.visit('https://jsonplaceholder.typicode.com/')
//       cy.contains('span', "{JSON} Placeholder").should('be.visible')
//     })
//   })
 
//   it('loads the ad 2', () => {
//     cy.visit('https://jsonplaceholder.typicode.com/')
//     cy.contains('a', "Check my new project").should('be.visible')
//   })

//   it('loads the ad 3', () => {
//     cy.visit('https://jsonplaceholder.typicode.com/')
//     cy.contains('a', "Check my new project").should('be.visible')
//   })
// })