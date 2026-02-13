# Automation-Project-with-Cypress

End-to-end test automation project built with Cypress to validate real user scenarios on an e-commerce site.

## 🎯 Project Objective & Scope

This project automates selected [**test cases**](https://automationexercise.com/test_cases) from the [**Automation Exercise**](https://automationexercise.com/) practice website.

The test cases were chosen to represent key user flows of an e-commerce platform:

- _TC-AUTO-01_: User Registration
- _TC-AUTO-02_: Login with valid credentials
- _TC-AUTO-08_: Verify All Products and Product Detail Page
- _TC-AUTO-09_: Search Product
- _TC-AUTO-10_: Verify Subscription in Home Page

---

### 💻 Tech Stack

- Cypress
- JavaScript
- Node.js
- [GitHub](https://github.com/Lituhana/Automation-Project-with-Cypress)

---

### ▶️ How to rn this Project

1. Clone the repository
2. Install dependencies:

   - npm install

3. Open Cypress test runner:

   - npx cypress open

---

### 📁 Project Structure

```
├── cypress
│   │
│   ├── bugs
│   │   └── BUG-AUTO-01.md
│   │
│   ├── e2e
│   │   ├── login.cy.js
│   │   ├── products.cy.js
│   │   ├── register.cy.js
│   │   ├── search-product.cy.js
│   │   └── subscription.cy.js
│   │
│   ├── screenshots
│   │   └── BUG-AUTO-01.png
│   │
│   └── test-cases
│       ├── TC-AUTO-01.md
│       ├── TC-AUTO-02.md
│       ├── TC-AUTO-08.md
│       ├── TC-AUTO-09.md
│       └── TC-AUTO-10.md
│ 
└── README.md
```

---

### 💻 Project Management

This project was managed using Trello.

- [**My Trello Board**](https://trello.com/b/ZrIpVWcH/qa-automation-project-cypress)

---

### 🚀 Test Automation Progress

| ID | Test Case | Status | Script |
|:---|:---|:---|:---|
| TC-AUTO-01 | Register User | Automated ✅ | [register.cy.js](/cypress/e2e/register.cy.js) |
| TC-AUTO-02 | Login User | Automated ✅ | [login.cy.js](/cypress/e2e/login.cy.js) |
| TC-AUTO-08 | Verify Products | Automated ✅ | [products.cy.js](/cypress/e2e/products.cy.js) |
| TC-AUTO-09 | Search Product | Automated ✅ | [search-product.cy.js](/cypress/e2e/search-product.cy.js) |
| TC-AUTO-10 | Verify Subscription | Automated ✅ | [subscription.cy.js](/cypress/e2e/subscription.cy.js) |

---

### 🐛 Reported Bug

- **BUG-AUTO-01**: Duplicate "data-qa" attribute in login form  

  - Status: Reported 🚩  
  - Impact: Affects automation selector stability

---

### 🏁 Project Goal

The objective of this project is to demonstrate:

- End 2 end test automation using Cypress
- Test case documentation and traceability
- Basic bug reporting practices
- Dynamic data handling