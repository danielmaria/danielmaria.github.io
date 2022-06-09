describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check right number of flags', () => {
    cy.get('app-footer > .text-center > span').contains(new Date().getFullYear());
  })
})