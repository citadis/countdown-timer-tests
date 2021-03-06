const { Given, Then, When } = require('cucumber')
const expect = require('chai').expect

Given(/^Open the app$/, () => {
  browser.url('/')
})

Given(/^I go to the website "([^"]*)"$/, function (url) {
  browser.url(url)
})

Then(/^I expect the title of the page to be "([^"]*)"$/, function (title) {
  expect(browser.getTitle()).to.be.eql(title)
})

When(/^I enter "([^"]*)" seconds in the time field$/, function (seconds) {
  browser.setValue('input[type="text"]', seconds)
})

When(/^I click the Start Countdown button$/, function () {
  browser.click('input.button.success.expanded')
})

Then(/^I expect the countdown time to be updated to "([^"]*)"$/, function (time) {
  expect(browser.getText('.clock-text')).to.be.eql(time)
})
