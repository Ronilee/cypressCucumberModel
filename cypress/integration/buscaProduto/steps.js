Given(/^que acesso a pagina$/, () => {
    cy.visit('/')
});

When(/^busco produto "([^"]*)"$/, (produto) => {
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('.natds15 > .MuiIconButton-label > .material-icons').type(produto);
    cy.get('.natds413').click();

});

Then(/^check list product$/, () => {

cy.get('.ProductPageBanner-module__product-page-banner__brand--3kr-Z').should('to.be.visible')

});
