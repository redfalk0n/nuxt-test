/* eslint-disable no-undef */
describe('Some test', () => {
  it('visits fine', () => {
    cy.visit('/')
  })
  it('shuffles fine', () => {
    cy.get('#shuffle-list').then((el) => {
      const before = el[0].innerHTML
      cy.get('#shuffle')
        .click()
        .wait(1000)
      cy.get('#shuffle-list').then((el2) => {
        assert.notEqual(before, el2[0].innerHTML)
      })
    })
  })
})
