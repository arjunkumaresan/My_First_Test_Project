Feature: test the login feature

Scenario: Successfull login with valid credentials

Given User launch chrome browser
When User opens URL "http://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on login
Then page title should be "Dashboard / nopCommerce administration"
When User click on Log out link
Then Page Title should be "Your store. Login"
And Close browser

Scenario Outline: Login data driven

Given User launch chrome browser
When User opens URL "http://admin-demo.nopcommerce.com/login"
And User enters Email as "<Email>" and Password as "<Password>"
And Click on login
Then page title should be "Dashboard / nopCommerce administration"
When User click on Log out link
Then Page Title should be "Your store. Login"
And Close browser

Examples:
|Email|Password|
|man@yourstore.com|1234    |
|admin@yourstore.com|admin|
