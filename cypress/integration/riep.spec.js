/* eslint-disable no-undef */
describe('Riep v0.01', () => {
  it('Visits fine', () => {
    cy.visit('http://localhost:3001')
  })
  it('Selector works', () => {
    cy.contains('Отчёты').click()
    cy.get('#report-selector').should('be.visible')
    cy.get('.subreport').then((elem) => {
      cy.get(elem[1]).click()
    })
  })
  it('Checkboxes works', () => {
    cy.get('.custom-control-input').then((checkboxes) => {
      cy.get(checkboxes[0]).check({ force: true })
      cy.get(checkboxes[1]).check({ force: true })
    })
  })
})
