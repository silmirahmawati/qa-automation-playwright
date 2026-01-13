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

## 🧪 Test Scenarios Covered
### Smoke Test
- Open SauceDemo homepage
- Validate page title

### Login Test
- Login with valid credentials
- Validate successful redirect to inventory page
- Login negative case (invalid password)

---

## 📊 Test Report
- Playwright automatically generates an HTML report including:
- Test status (pass/fail)
- Execution time
- Screenshot & video on failure


## ▶️ How to Run the Tests
Install dependencies:
```bash
npm install
npx playwright install

Run all tests:
npm test

Run tests with browser UI:
npm run test:headed

Open HTML report:
npm run test:report

