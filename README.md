# Authentication & Authorization Testing

## Overview

This project demonstrates web authentication testing using **Playwright and TypeScript**.

The goal is to automate common authentication scenarios, including successful login, invalid credentials, locked users, and logout functionality.

## Technologies

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Page Object Model (POM)

## Test Scenarios

The automation suite covers:

1. Successful login with valid credentials
2. Login rejection with invalid credentials
3. Locked user validation
4. Successful logout

## Project Structure

```text
authentication-authorization-testing/
│
├── pages/
│   └── LoginPage.ts
│
├── tests/
│   └── authentication.spec.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md