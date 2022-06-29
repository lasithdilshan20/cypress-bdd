import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../../pages/login');
const locationPage = require('../../../pages/location');
const mainPage = require('../../../pages/main');
const baseUrl = Cypress.config().baseUrl;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
function I_FillLoginData() {
    cy.get(loginPage.clientCode).type("104572");
    cy.get(loginPage.username).type("testassignment");
    cy.get(loginPage.password).type("PosTestAssignment123");
    cy.get(loginPage.login).click();
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
    cy.get(locationPage.locationPOS.title).should('contain', pageTitle);
})

Given('I am on the select location page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get(locationPage.locationPOS.warehouseName).should('contain', 'Location #1');
})

When('I click on {string}', (locationNo)=>{
    cy.get(locationPage.locationPOS.warehouseName).contains(locationNo).click();
})

Then('I should see the dashboard page with {string} as the user name', userName=>{
    cy.get(mainPage.user.name).should('contain', userName);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get(locationPage.locationPOS.warehouseName).should('contain', 'Location #1');
    cy.get(locationPage.locationPOS.warehouseName).contains("Location #1").click();
})

When('I search product by name {string}', (productName)=>{
    cy.get(mainPage.product.searchInput).should('be.visible');
    cy.get(mainPage.product.searchInput).type(productName);
    cy.get(mainPage.product.searchButton).click();
})

Then('I should see the product details page with {string} as the product name', productName=>{
    cy.get(mainPage.product.productView).should('contain', productName);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get(locationPage.locationPOS.warehouseName).should('contain', 'Location #1');
    cy.get(locationPage.locationPOS.warehouseName).contains("Location #1").click();
})

When('I search product by code {string}', (productCode)=>{
    cy.get(mainPage.product.searchInput).should('be.visible');
    cy.get(mainPage.product.searchInput).type(productCode);
    cy.get(mainPage.product.searchButton).click();
})

Then('I should see the product details page with {string} as the product code', productCode=>{
    cy.get(mainPage.product.productView).should('contain', productCode);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get(locationPage.locationPOS.warehouseName).should('contain', 'Location #1');
    cy.get(locationPage.locationPOS.warehouseName).contains("Location #1").click();
})

When('I search invalid product name {string}', (invalidProductName)=>{
    cy.get(mainPage.product.searchInput).should('be.visible');
    cy.get(mainPage.product.searchInput).type(invalidProductName);
})

Then('I should see the error message {string}', (errMsg)=>{
    cy.get(mainPage.product.productResult).should('contain', errMsg);
})

Given('I am on the select main page', function (){
    cy.title().should('contain', 'ERPLY Login');
    I_FillLoginData();
    cy.get(locationPage.locationPOS.warehouseName).should('contain', 'Location #1');
    cy.get(locationPage.locationPOS.warehouseName).contains("Location #1").click();
})

When('I search product name {string}', (ProductName)=>{
    cy.get(mainPage.product.searchInput).should('be.visible');
    cy.get(mainPage.product.searchInput).type(ProductName);
    cy.get(mainPage.product.searchButton).click();
})

Then('I should see the price {string}', (productPrice)=>{
    cy.get(mainPage.product.productView).should('contain', productPrice);
})