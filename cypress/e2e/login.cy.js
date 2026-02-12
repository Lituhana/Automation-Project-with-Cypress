describe("Login User", () => {

  it("TC-AUTO-02 - Login User with correct email and password", () => {

    //     Confirmamos que estamos en la página del login, ingresamos datos de usuario registrado:

       cy.visit("https://automationexercise.com")
       cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

       cy.get('a[href="/login"]').click()

       cy.contains("Login to your account").should("be.visible")

       cy.get('[data-qa="login-button"]').type("ana123@test.com")
       cy.get('[data-qa="login-password"]').type("ANA12345!")
       cy.get('[data-qa="login-button"]').click()

//------------------------------------------------------------------------------------------------------------------//

  })
})