describe("Search Product", () => {

  it("TC-AUTO-09 - Search Product", () => {

    //     Confirmamos que estamos en la página principal y hacemos click en "Productos"

    cy.visit("https://automationexercise.com")
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    cy.get('a[href="/products"]').click()

//------------------------------------------------------------------------------------------------------------------//

    //     Confirmamos que estamos en la página de los productos:

    cy.contains("All Products").should("be.visible")
    cy.get('.product-image-wrapper').should("have.length.greaterThan", 0) 

//------------------------------------------------------------------------------------------------------------------//   

    //     Buscamos un producto (Camiseta) en el buscador:

    cy.get('[id="search_product"]').type("Tshirt")        
    cy.get('[id="submit_search"]').click()  

    cy.contains("Searched Products").should("be.visible")

    cy.get('.product-image-wrapper').should("have.length.greaterThan", 0).should("contain", "Tshirt")

  })
})