Feature: Validate the Quotation to a registered Insurance customer

Background: Launch the Insurance Website
Given I open the Insurance Application

Scenario: I provide invaild email - Login Failure
Then I enter email "jmineiko@hotmail.red" and password "Test@121"
Then I should see error message on the screen

Scenario: I provide invaild email - Login Success
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I should see menus in home page
|menu_name|
|Home|
|Request Quotation|
|Retrieve Quotation|
|Profile|
|Edit Profile|

Scenario: I validate Request Quotation - Request Quotation
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I click "Request Quotation"
Then I enter the values in Request Quotation
|cover   |screen|incidents|registration|milage|estimate|parking         |year|month|day|
|Roadside|yes   |19       |TN02AB3012  |12    |800000  |Private Property|2020|March|25 |
Then I click "Save Quotation"
Then I wait 10 for sec
And I store identification number

Scenario: I validate Retrieve Quotation - Retrieve Quotation
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I click "Retrieve Quotation"
Then I enter identification number and click retrive
Then I check the values in the Retrive Quotation
|cover   |screen|incidents|registration|milage|estimate|parking         |date|
||Yes   |19       |TN02AB3012  |12    |800000  |Private property|2020.3.25|

Scenario: I validate the profile page - Profile
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I click "Profile"
Then I should see "Title:" text
Then I should see "Firstname:" text
Then I should see "Surname:" text
Then I should see "Phone:" text
Then I should see "Dataofbirth:" text
Then I should see "License type:" text
Then I should see "License period:" text
Then I should see "Occupation:" text
Then I should see "Driver History:" text
Then I should see "ADDRESS:" text

Scenario: I validate edit profile page - Edit Profile
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I click "Edit Profile"
Then I enter the values in Edit profile
|title|surname|firstname|phone     |year|month|day|Licenceperiod|street|city|country|postcode|
|Mr   |Test   |Test     |9999999999|1995|April|20 |2            |Test  |Test|Test   |600040  |

Scenario: I logout from the application - Logout
Then I enter email "jmineiko@hotmail.red" and password "Test@123"
Then I should see "jmineiko@hotmail.red" email logged in
Then I click "Log out"
Then I enter email "jmineiko@hotmail.red" and password "Test@121"
Then I should see error message on the screen


