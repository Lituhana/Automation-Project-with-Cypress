describe("Verify Subscription in Home Page", () => {

  it("TC-AUTO-10 - Verify Subscription", () => {

    const email = "ana" + Date.now() + "@test.com" // GENERO UNA CONSTANTE DE CORREO PARA ALEATORIZAR EL EMAIL

      //     Confirmamos que estamos en la página principal

      cy.visit("https://automationexercise.com")
      cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

//------------------------------------------------------------------------------------------------------------------//

      //     Scrolleamos hasta el footer:

      cy.get("#footer").scrollIntoView()
      cy.contains("Subscription").should("be.visible")

//------------------------------------------------------------------------------------------------------------------//

      //     Ingresamos email para suscribirnos:

      cy.get("#footer").scrollIntoView()
      cy.get("#susbscribe_email").type(email)
      cy.get("#subscribe").click()

//------------------------------------------------------------------------------------------------------------------//

      //     Verificamos mensaje de suscripción exitosa:

      cy.contains("You have been successfully subscribed!").should("be.visible")

  })
})