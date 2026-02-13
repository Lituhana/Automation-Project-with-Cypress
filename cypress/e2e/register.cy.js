describe("User Registration", () => {

  it("TC-AUTO-01 - Register User", () => {

    const email = "ana" + Date.now() + "@test.com" // GENERO UNA CONSTANTE DE CORREO PARA ALEATORIZAR EL EMAIL


       //     Confirmamos que estamos en la página del login, ingresamos datos de usuario:

       cy.visit("https://automationexercise.com")
       cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

       cy.get('a[href="/login"]').click()

       cy.contains("New User Signup!").should("be.visible")

       cy.get('[data-qa="signup-name"]').type("Ana")
       cy.get('[data-qa="signup-email"]').type(email)
       cy.get('[data-qa="signup-button"]').click()

//------------------------------------------------------------------------------------------------------------------//

       //     Ingreso de info personal de la cuenta:

       cy.contains("Enter Account Information").should("be.visible")

       cy.get('#id_gender2').check() 

       cy.get('[data-qa="password"]').type("Password123!")

       cy.get('[data-qa="days"]').select("11")
       cy.get('[data-qa="months"]').select("February")
       cy.get('[data-qa="years"]').select("2020")
       
       cy.get('#newsletter').check() 
       cy.get('#optin').check() 

//------------------------------------------------------------------------------------------------------------------//

       //     Ingreso de info de dirección de la cuenta:

       cy.get('[data-qa="first_name"]').type("Ana")       
       cy.get('[data-qa="last_name"]').type("Pérez")
       cy.get('[data-qa="company"]').type("Google")
       cy.get('[data-qa="address"]').type("NingúnLugar1234")
       cy.get('[data-qa="country"]').select("India")
       cy.get('[data-qa="state"]').type("Montevideo")
       cy.get('[data-qa="city"]').type("Montevideo")
       cy.get('[data-qa="zipcode"]').type("12345")
       cy.get('[data-qa="mobile_number"]').type("12345678")
       cy.get('[data-qa="create-account"]').click()
       cy.contains("Account Created!").should("be.visible")
       cy.get('[data-qa="continue-button"]').click()

//------------------------------------------------------------------------------------------------------------------//

       //     Confirmamos que la ceunta se creó y estamos loggeados con el usuario creado:

       cy.contains("Logged in as Ana").should("be.visible")

       cy.get('a[href="/delete_account"]').should("be.visible")
       
       cy.get('a[href="/logout"]').should("be.visible")

//------------------------------------------------------------------------------------------------------------------//

       //     Borramos al nuevo usuario creado, para validar que esta función opera correctamente:

       cy.get('a[href="/delete_account"]').click()
       cy.contains("Account Deleted!").should("be.visible")
       cy.get('[data-qa="continue-button"]').click()
       
  })
})