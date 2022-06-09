describe('PDF modal tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check modal open', () => {
    cy.get('.file-pdf-icon').first().click();
    cy.get('#modal-basic-title').first().should('contain', 'Certification');
    cy.get('app-pdf-viewer').should('have.attr', 'ng-reflect-patch');
    cy.get('.btn-close').click();
    cy.get('#modal-basic-title').first().should('not.exist');
  })
})