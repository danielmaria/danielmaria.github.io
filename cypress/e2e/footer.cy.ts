describe('Footer tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check year on the footer', () => {
    cy.get('app-footer > .text-center > span').contains(new Date().getFullYear());
  })
})