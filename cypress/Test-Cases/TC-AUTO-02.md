# 🔐 TC-AUTO-02 - Login User with Correct Credentials

## 📋 General Information:

- **Author:** Ana Osaba
- **Date:** 11/02/2026
- **Status:** Automated ✅
- **Tool:** Cypress
- **Priority:** High
- **Trello Card:** [TC-AUTO-02](https://trello.com/c/xCfxNfsC/2-tc-auto-02-login-user)

## 📝 Description:

Verify that a registered user can log in using valid credentials.

## 🛠️ Preconditions:

- User must be registered.
- User is on home page.

## 🐾 Steps:

1. Click on "Signup / Login" button.
5. Verify "Login to your account" is visible.
6. Enter correct email address and password.
7. Click "Login" button.
8. Verify that "Logged in as {username}" is visible.
9. Click "Delete Account" button.
10. Verify that "ACCOUNT DELETED!" is displayed.

## 🏁 Expected Result:

- User logs in successfully.
- Username is displayed.
- Account is deleted successfully.