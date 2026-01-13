# QA Automation Playwright

End-to-end QA Automation framework built with **Playwright + JavaScript** using **Page Object Model (POM)**.  
This project demonstrates real-world web testing scenarios with clean structure, reusable components, and HTML reporting.

---

## 🚀 Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- HTML Test Report

---

## 📂 Project Structure
qa-automation-playwright
├── tests # Test cases
│ ├── smoke.spec.js
│ └── login.spec.js
├── pages # Page Object Models
│ └── LoginPage.js
├── fixtures # Test data (future ready)
├── utils # Helper utilities
├── playwright.config.js
└── README.md

yaml
Copy code

---

## 🧪 Test Scenarios Covered
### Smoke Test
- Open SauceDemo homepage
- Validate page title

### Login Test
- Login with valid credentials
- Validate successful redirect to inventory page
- Login negative case (invalid password)

---

## ▶️ How to Run the Tests
Install dependencies:
```bash
npm install
npx playwright install
Run all tests:

bash
Copy code
npm test
Run tests with browser UI:

bash
Copy code
npm run test:headed
Open HTML report:

bash
Copy code
npm run test:report

📊 Test Report
Playwright automatically generates an HTML report including:
Test status (pass/fail)
Execution time
Screenshot & video on failure