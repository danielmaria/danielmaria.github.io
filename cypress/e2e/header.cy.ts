describe('Header tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check right number of flags', () => {
    cy.visit('/')
    cy.get('.flag-icon:visible').should('have.length', 2);
  })

  it('check right patch of photo', () => {
    cy.get('.perfil-photo').should('be.visible');
  })

  it('check toggle between br and en', () => {
    const degree = cy.get('#firstDegree');

    cy.get('#firstDegree').first().should('contain', 'Information Systems')
    cy.get('.d-flex > :nth-child(2) > #language').click();
    expect(cy.get('#firstDegree')).to.not.equals(degree);
    cy.get('#firstDegree').first().should('contain', 'Sistema de informação')

    cy.get('.d-flex > :nth-child(1) > #language').click();
  })

  it('check social media buttons', () => {
    cy.get('.social-media-button').should('have.length', 6);
  })

})