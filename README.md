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

<img width="546" height="271" alt="image" src="https://github.com/user-attachments/assets/5b31d4d9-de42-4666-b16d-e33219a261b1" />


## Running the Tests

Install dependencies:
Steps done.
-npm install

-npx playwright test

-npx playwright test --headed


### Test Results
All the four(4) automated tests : Pass

The following screenshots demonstrate the project testing process, including Playwright test execution, the generated HTML test report, and the GitHub Actions workflow with a successful test report upload.

### Screenshot 1 — Test execution 
Command:
-npx playwright test

<img width="709" height="285" alt="image" src="https://github.com/user-attachments/assets/636c47cc-9f39-47f5-b2d3-33ba0784a4cc" />

### Screenshot 2 — Playwright HTML Report
Command:
-npx playwright show-report

<img width="907" height="529" alt="image" src="https://github.com/user-attachments/assets/6d0f2b19-bac9-4e36-a6eb-979e52a30787" />


### Screenshot 3 — GitHub Actions
Flow: 
* Code → GitHub → CI → Playwright → Tests passed

<img width="932" height="388" alt="image" src="https://github.com/user-attachments/assets/a7727384-d736-4188-93d9-0d8d032c320e" />


