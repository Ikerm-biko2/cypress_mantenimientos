const defaultEnvironment = require('../../../environments/defaultEnvironment')
describe('PDP - Aside', defaultEnvironment(), () => {
  it('should view product title', () => {
    console.log(defaultEnvironment());
    cy.visit(
      defaultEnvironment().storeUrl +
        '/electrodomesticos/A36641439-frigorifico-combi-bosch-no-frost-kgn39vweq/?parentCategoryId=2013.40432842016&color=Blanco'
    );
    cy.get('.product_detail-aside').find('h1').should('not.be.empty');
  });
  it('should view installation service', () => {
    console.log(defaultEnvironment());
    cy.visit(
      defaultEnvironment().storeUrl +
        '/electrodomesticos/A36641439-frigorifico-combi-bosch-no-frost-kgn39vweq/?parentCategoryId=2013.40432842016&color=Blanco'
    );
    cy.get('.product_detail-purchase').contains('Cambio sentido de puerta frigorífico por');
  });
  it('should add to cart on click', () => {
    console.log(defaultEnvironment());
    cy.visit(
      defaultEnvironment().storeUrl +
        '/electronica/A43541776-portatil-asus-f1500ea-ej2383w-i3-8gb-512gb-ssd-156-w11/?parentCategoryId=2013.40432970016&color=Negro'
    );
    cy.get('#js_add_to_cart_desktop').click();
    cy.get('#minicart-count').contains(1)
  });
});