module.exports = {
  // 'Demo test Google': (browser) => {
  //   browser
  //     .url('https://www.google.com')
  //     .waitForElementVisible('body')
  //     .setValue('input[type=text]', 'nightwatch')
  //     .waitForElementVisible('input[name=btnK]')
  //     .click('input[name=btnK]')
  //     .pause(1000)
  //     .assert.containsText('#main', 'Nightwatch')
  //     .end()
  // },
  'Localhost test': (browser) => {
    browser.url('http://localhost:3000').waitForElementVisible('body')
    browser.expect.element('#shuffle-list').to.be.a('span')
    browser.click('#shuffle').pause(1000)
    browser.end()
  },
}
