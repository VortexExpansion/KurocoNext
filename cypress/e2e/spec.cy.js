
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://sushipedia.g.kuroco-front.app/homePage/')
    // cy.get("button[type='ChevRight']").click();
    // cy.contains("2").click();
    // cy.contains("3").click();
    // Testing kuroco search

    cy.get("input[type='search']").clear().type("as");
    cy.get("button[type='submit").click();
    cy.get("input[type='search']").clear().type(" ");
    cy.get("button[type='submit").click();

    // Testing tag filters

    cy.contains('All Sushi').click()
    cy.contains('Editors pick').click()

    //Testing categories dynamic pages
    cy.contains("1").click();
    cy.contains('Read more').click()
    cy.url().should('include', '/categories/')
    cy.get("input[type='search']").type("c");
  })
})
