describe("Products Page", () => {

  it("TC-AUTO-08 - Verify All Products and Product Detail Page", () => {

    //     Confirmamos que estamos en la página del login y hacemos click en "Productos"

    cy.visit("https://automationexercise.com")
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    cy.get('a[href="/products"]').click()

//------------------------------------------------------------------------------------------------------------------//

    //     Confirmamos que estamos en la página de los productos:

    cy.contains("All Products").should("be.visible")
    cy.get('.product-image-wrapper').should("have.length.greaterThan", 0) 

//------------------------------------------------------------------------------------------------------------------//    

    //     Hacemos click en el detalle del primer producto y verificamos la info de esa pantalla

    cy.get('a[href*="/product_details/"]').first().click()

    cy.get('.product-information').within(() => {

      cy.get("h2").should("be.visible") 
      cy.contains("Category:").should("be.visible") 
      cy.contains("Rs.").should("be.visible") 
      cy.contains("Availability:").should("be.visible")
      cy.contains("Condition:").should("be.visible")
      cy.contains("Brand:").should("be.visible")

    })
  })
})