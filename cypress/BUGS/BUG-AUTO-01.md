# 🐛 BUG-AUTO-01 - Duplicate "data-qa" Attribute

## 📋 General Information:

- **Author:** Ana Osaba
- **Date:** 11/02/2026
- **Status:** Reported 🚩
- **Tool:** Browser Inspector (Firefox)
- **Priority:** Low (Only afects the QA team)

## 📝 Description:
The `"data-qa"` attribute is duplicated in the login form, both the `Email Address` input and the `Login` button share the same value: `login-button`
<br>
![login-button](/cypress/BUGS/BUG-AUTO-01.png)
<br>
which hinders unique element identification for automation.


## 🛠️ Preconditions:
- Navigate to the Login page: **https://automationexercise.com/login**

## 🐾 Steps:

1. Right-click on the `Email Address` input field in the `Login to your account` section.
2. Select `Inspect` to view the HTML source code.
3. Repeat the process for the `Login` button in the same section.
4. Compare both `"data-qa"` attributes.

## 🏁 Expected Result:

- The `Email input` should have a unique identifier `**(e.g., data-qa="login-email").**`
- The `Login button` should have a unique identifier `**(e.g., **data-qa="login-button").**`

## Actual Result: 

- Both elements share `**data-qa="login-button"`.