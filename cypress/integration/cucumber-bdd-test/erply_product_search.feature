Feature:  ERPLY Point of Sale product search
  As a user I want to login to the application with valid credentials and search for a product
  Scenario: Login to the application
    Given I am on the login page
    When I enter valid credentials
    Then I should see the POS title is "Select POS"

  Scenario: Select POS Location and navigate to main page
    Given I am on the select location page
    When I click on "Location #1"
    Then I should see the dashboard page with "Test User" as the user name

  Scenario: Search product by name
    Given I am on the select main page
    When I search product by name "Fanta"
    Then I should see the product details page with "Fanta" as the product name

  Scenario: Search product by Code
    Given I am on the select main page
    When I search product by code "STRAWBERRY1"
    Then I should see the product details page with "STRAWBERRY1" as the product code

  Scenario: Search product by invalid product name
    Given I am on the select main page
    When I search invalid product name "invalid product name"
    Then I should see the error message "No results found."

  Scenario: Verify the pries of the product
    Given I am on the select main page
    When I search product name "Example product"
    Then I should see the price "12.00"