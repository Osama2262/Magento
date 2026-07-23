# Magento 2 E-Commerce Test Automation Framework 🚀

<p align="right">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg" width="250">
</p>

A comprehensive **End-to-End Test Automation Framework** built using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.

The framework automates the core business flows of the **Magento 2 Demo Store**, including customer registration, login, shopping cart management, wishlist operations, and the complete checkout process.

---

# 📖 Introduction

This project was developed to practice building a scalable and maintainable UI automation framework using Playwright.

Rather than automating isolated test cases, the framework focuses on complete user journeys that simulate how real customers interact with an e-commerce application.

The project demonstrates best practices such as:

- Page Object Model (POM)
- Reusable page methods
- Dynamic test data generation
- Clean project structure
- End-to-End workflow automation
- HTML reporting

---

# 🌐 Application Under Test

**Magento 2 Demo Store**

https://magento2-demo.magebit.com/

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Browser Automation |
| TypeScript | Programming Language |
| Playwright Test | Test Runner |
| Faker.js | Dynamic Test Data |
| Node.js | Runtime Environment |
| Page Object Model | Framework Architecture |

---

# 📋 Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later)
- npm
- Visual Studio Code (Recommended)
- Playwright Browsers

---

# 📁 Project Structure

```
Magento/
│
├── Pages/
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── ProductListPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── TC01_Register.spec.ts
│   ├── TC02_Login.spec.ts
│   ├── TC03_ProductList.spec.ts
│   └── TC203_Checkout.spec.ts
│
├── utils/
│   └── Credentials.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 📂 Detailed File Breakdown

## 📄 Pages

Contains all **Page Object Model** classes.

Each page object is responsible for:

- Locators
- User actions
- Business methods
- Assertions

### LoginPage

Handles:

- Login
- Welcome message verification

---

### RegisterPage

Handles:

- Customer Registration
- Registration validation

---

### ProductListPage

Handles:

- Product Selection
- Add to Cart
- Update Quantity
- Remove Product
- Add to Wishlist
- Remove from Wishlist

---

### CheckoutPage

Handles:

- Shipping Information
- Shipping Method
- Place Order
- Order Confirmation

---

## 📄 tests

Contains all automated test scenarios.

Current test suites:

- TC01_Register
- TC02_Login
- TC03_ProductList
- TC203_Checkout

---

## 📄 utils

Contains shared utilities.

Current utility:

**Credentials.ts**

Responsible for generating and sharing dynamic user credentials using Faker.

---

# 🌟 Main Test Scenarios

### 👤 Account

- Register a new customer
- Login with valid credentials

### 🛒 Shopping Cart

- Add product to cart
- Update product quantity
- Remove product from cart

### ❤️ Wishlist

- Add product to wishlist
- Remove product from wishlist

### 💳 Checkout

- Proceed to checkout
- Fill shipping information
- Select shipping method
- Place order successfully
- Verify order confirmation

---

# 🏗 Framework Design

The project follows the **Page Object Model (POM)** design pattern.

```
Tests
   │
   ▼
Page Objects
   │
   ▼
Magento Website
```

Benefits:

- Better maintainability
- Cleaner code
- Reusable methods
- Easy scalability

---

# 🎲 Test Data Management

The framework uses **@faker-js/faker** to generate dynamic test data such as:

- First Name
- Last Name
- Email Address
- Password
- Company
- Address
- City
- Postal Code
- Phone Number

This allows each test execution to create unique customer accounts.

---

# 📊 Reports

The framework generates:

- HTML Reports
- Trace Files (on retry)

Open the report using:

```bash
npx playwright show-report
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Magento-Automation.git
```

Navigate to the project

```bash
cd Magento
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Execute Tests

Run all tests

```bash
npm run test:chrome
```

Or

```bash
npx playwright test --project=chrome
```

---

# 🚀 Features

✅ Playwright Automation

✅ TypeScript

✅ Page Object Model

✅ Dynamic Test Data

✅ End-to-End Testing

✅ Cart Validation

✅ Wishlist Validation

✅ Checkout Automation

✅ HTML Reporting

---

# 📈 Future Improvements

Planned enhancements:

- Authentication using storageState
- CI/CD with GitHub Actions
- Environment variables using dotenv
- Negative test scenarios
- API integration testing
- Cross-browser execution
- Better locator strategy using Playwright Locators
- Remove hard waits

---

# 🤝 Contribution

Contributions are welcome!

If you'd like to improve the framework:

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📚 References

- Playwright Documentation
- TypeScript Documentation
- Faker.js Documentation
- Magento 2 Demo Store

---

# 👨‍💻 Author

## Osama Kandeel

**Automation Software Tester**

### Connect with me

- 💼 LinkedIn: https://www.linkedin.com/in/osama-kandel/
- 💻 GitHub: https://github.com/Osama2262

---

⭐ If you found this project helpful, don't forget to **Star** the repository!
