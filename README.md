# Godson Okoye  

## Overview 

This project encompasses multiple testing strategies across different components and functionalities.  


## Table of Contents  
- [React UI Testing](#react-ui-testing)
   
- [Item Creation Testing](#item-creation-testing)
  
- [API Testing with SuperTest](#api-testing-with-supertest)
  
- [Token Refresh Test](#token-refresh-test)

- [React UI Testing](#react-ui-testing)
 
- [API Testing with Cypress and SuperTest](#api-testing-with-cypress-and-supertest)
 
- [UI Interaction Testing with Cypress](#ui-interaction-testing-with-cypress)
  
- [Prerequisites](#prerequisites)
  
- [Setup](#setup)
  
- [Running Tests](#running-tests)
  
- [Starting the Frontend App](#starting-the-frontend-app)
  
- [License](#license)

 


## React UI Testing  

- UI Components: Defined in `login.js`  

- Testing File: `login.test.js`  

- Description: Tests the React UI components for user login functionality using Jest.  


## Item Creation Testing 

- Testing File: `itemform.test.js`  

- Description: Verifies item creation functionalities, using Jest to test components defined in `itemform.js`

## API Testing with SuperTest 

- Testing File: `newapp.test.js`  

- Description: Includes API tests for authentication.

## Token Refresh Test  

- Testing File: `newapptoken.test.js`
  
Description: This test checks the token refresh functionality, ensuring that an expired token can be successfully refreshed. It sends a request to the token refresh endpoint and expects a new token in response.  

## React UI Testing  

UI Components: Defined in login.js  

- Testing File: `login.test.js`  

Description: Tests the React UI components for user login functionality using Jest.  

- Tested Component: LoginForm  

Test Description: This test verifies the rendering of the login form and checks the presence of the username and password input fields.
  

## API Testing with Cypress and SuperTest 

- Testing File: `newappfirsttest.test.js`  

- Description: Tests user management using Cypress.  

## UI Interaction Testing with Cypress

- Testing File: `cypressUi.test.js`  

- Description: Tests various user interactions such as logging in, creating, updating, and deleting items on the UI using Cypress.

## Prerequisites  

- React: Ensure React is installed: npm `install react react-dom`  

- Jest: Ensure Jest is installed: npm `install jest --save-dev` 

- SuperTest: Install SuperTest for API testing: npm `install supertest --save-dev`  

- Cypress: Install Cypress for end-to-end testing: npm `install cypress --save-dev ` 

- Node.js: Ensure Node.js is installed.

## Setup 

1 Clone the repository.  

2 Navigate to the project directory.  

3 Install the necessary dependencies: npm install.  

## Running Tests  

**React UI Tests**  

- Run specific test file: `npx jest login.test.js`  

## Item Creation Tests 

- Run specific test file: `npx jest itemform.test.js` 

## API Tests 

- Run all API tests: `npx jest`  

## Cypress Tests  

- Headed Mode: Run Cypress tests in headed mode: `npx cypress open ` 

- Headless Mode: Run Cypress tests in headless mode: `npx cypress run  `

## Starting the Frontend App  

1 Navigate to the project directory.  

2 Start the development server: ` npm start`

3 The app will be running on `http://localhost:3000.`  

## License  

This project is licensed under the MIT License  

