let wd = require('wd');
var chai = require('chai');
var should = chai.should();
let expect = chai.expect; 
var desirecap = require('./pages/helpers/desiredCapabilities').options.desiredCapabilities1;
var Serverconfig = require('./pages/helpers/desiredCapabilities').options.Server1;
var ngfaker = require('ng-faker');

main()

async function main() {

  wd.configureHttp({
    timeout: 7 * 60000, // 20 mins
    retries: 3,
    retryDelay: 5000
  })

  let driver = wd.promiseChainRemote(Serverconfig)
  try {
   const caps = await driver.init(desirecap)
   console.log(caps)
  }
  catch(err) {
    if (err.data) {
      console.error(`init driver: ${err.data}`)
    }
   
    throw err
  }
  
  var randomName = ngfaker.name.firstName(); 
  var randomPhone = ngfaker.phone.phoneNumber();

  //#region  ///Enter the User Pin
  await driver
  .waitForElementByXPath("(//*[@class='android.widget.EditText'])[1]")
  .sendKeys('2')

  await driver 
    .waitForElementByXPath("(//*[@class='android.widget.EditText'])[2]")
    .sendKeys('5')
    await driver

  .waitForElementByXPath("(//*[@class='android.widget.EditText'])[3]")
  .sendKeys('2')

  await driver 
    .waitForElementByXPath("(//*[@class='android.widget.EditText'])[4]")
    .sendKeys('9')
    //#endregion 

    ///Click on the Submit button
    await driver 
    .waitForElementByXPath("//*[@text='Submit']")
    .click()

    //#endregion

    //Enter the Phone Number
    await driver 
    .waitForElementByXPath("//*[@class='android.widget.EditText']")
    .sendKeys(randomPhone)

    console.log(randomPhone)

    ///Click on submit button
    await driver 
    .waitForElementByXPath("//*[@text='Submit']")
    .click()

    ///Enter the Code
    await driver 
    .waitForElementByXPath("(//*[@class='android.widget.EditText'])[2]")
    .sendKeys('123456')

    ///Click on submit button
    await driver 
    .waitForElementByXPath("//*[@text='Submit']")
    .click()

    await driver 
    .waitForElementByXPath("//*[@text='My name is...']") 
    .click()

    await driver 
    .waitForElementByXPath("//*[@class='android.widget.EditText']")
    .sendKeys(randomName)

    ///Click on submit button
    await driver 
    .waitForElementByXPath("//*[@text='Submit']")
    .click()

    if (driver != null) {
      try {
        await driver.quit()
      }
      catch (err) {
        console.error(`quit driver: ${err}`)
      }
    }
}