import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
const baseUrl = Cypress.config().baseUrl;
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
function I_FillLoginData() {
    cy.get('[name=clientCode]').type("104572");
    cy.get('[name=username]').type("testassignment");
    cy.get('[name=password]').type("PosTestAssignment123");
    cy.get('[data-testid=login-clockin-button]').click();
}
beforeEach(() => {
    cy.visit(baseUrl);
})

Given('I am on the login page', function (){
    cy.title().should('contain', 'ERPLY Login');
})

When('I enter valid credentials', ()=>{
    I_FillLoginData();
})

Then('I should see the POS title is {string}', pageTitle=>{
    cy.get('[data-testid=title]').should('contain', pageTitle);
})

Given('I am on the select location page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get('[data-testid=warehouse-name]').should('contain', 'Location #1');
})

When('I click on {string}', (locationNo)=>{
    cy.get('[data-testid=warehouse-name]').contains(locationNo).click();
})

Then('I should see the dashboard page with {string} as the user name', userName=>{
    cy.get('[data-testid=employee-name]').should('contain', userName);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get('[data-testid=warehouse-name]').should('contain', 'Location #1');
    cy.get('[data-testid=warehouse-name]').contains("Location #1").click();
})

When('I search product by name {string}', (productName)=>{
    cy.get('[data-testid=product-search-input] #customer-search-input').should('be.visible');
    cy.get('[data-testid=product-search-input] #customer-search-input').type(productName);
    cy.get('.MuiTableCell-alignRight').click();
})

Then('I should see the product details page with {string} as the product name', productName=>{
    cy.get(`div.product-view`).should('contain', productName);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get('[data-testid=warehouse-name]').should('contain', 'Location #1');
    cy.get('[data-testid=warehouse-name]').contains("Location #1").click();
})

When('I search product by code {string}', (productCode)=>{
    cy.get('[data-testid=product-search-input] #customer-search-input').should('be.visible');
    cy.get('[data-testid=product-search-input] #customer-search-input').type(productCode);
    cy.get('.MuiTableCell-alignRight').click();
})

Then('I should see the product details page with {string} as the product code', productCode=>{
    cy.get(`div.product-view`).should('contain', productCode);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get('[data-testid=warehouse-name]').should('contain', 'Location #1');
    cy.get('[data-testid=warehouse-name]').contains("Location #1").click();
})

When('I search invalid product name {string}', (invalidProductName)=>{
    cy.get('[data-testid=product-search-input] #customer-search-input').should('be.visible');
    cy.get('[data-testid=product-search-input] #customer-search-input').type(invalidProductName);
})

Then('I should see the error message {string}', (errMsg)=>{
    cy.get(`[data-testid=product-results-body]`).should('contain', errMsg);
})