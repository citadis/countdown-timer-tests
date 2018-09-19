# Acceptance Tests
Feature: Acceptance Tests
  I should be able to hit the website and perform basic functionality

Scenario: Check the web page's title
  Given I go to the website "/"
  Then I expect the title of the page to be "Countdown Timer"

Scenario: Start Countdown
  Given I go to the website "/"
  When I enter "10" seconds in the time field
  And I click the Start Countdown button
  Then I expect the countdown time to be updated to "00:10"
