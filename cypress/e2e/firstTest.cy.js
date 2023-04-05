describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('should be able to find and navigate to bulbasaur', function() {
    cy.visit('http://localhost:5001')
    cy.contains('bulbasaur').click()
    cy.contains('bulbasaur')
    cy.contains('chlorophyll')
  })
})