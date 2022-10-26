Feature: Adding a customer

Scenario: adding a new customer

Given User launch chrome browser
When User opens URL "http://admin-demo.nopcommerce.com/login"
And User enters Email as "admin@yourstore.com" and Password as "admin"
And Click on login
Then Users can view dashboard
When User clicks on customer menu 
And Click on customers menu item
And Click on add new button
Then user can view add new customer page
When User enter  customer info
And click on the save button
Then user can view confirmation message "The new customer has been added successfully"
And close the browser
