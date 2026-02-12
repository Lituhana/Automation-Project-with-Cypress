describe("Login User", () => {

  it("TC-AUTO-02 - Login User with correct email and password", () => {

    //     Confirmamos que estamos en la página del login, ingresamos datos de usuario registrado:

    cy.visit("https://automationexercise.com")
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    cy.get('a[href="/login"]').click()

    cy.contains("Login to your account").should("be.visible")

    cy.get('.login-form').within(() => {
    cy.get('input[name="email"]').type("ana123@test.com")
    cy.get('[data-qa="login-password"]').type("ANA12345!")
    cy.get('button[data-qa="login-button"]').click()
    })
    
//------------------------------------------------------------------------------------------------------------------//

    //     Confirmamos que estamos loggeados con nuestra cuenta con credenciales válidas

    cy.contains("Logged in as").should("be.visible")

//------------------------------------------------------------------------------------------------------------------//

    //     Eliminamos la cuenta creada

    cy.get('a[href="/delete_account"]').click()
    cy.contains("Account Deleted!").should("be.visible")
    cy.get('[data-qa="continue-button"]').click()

  })
})