let wd = require('wd');
var chai = require('chai');
var should = chai.should();
let expect = chai.expect; 
var desirecap = require('./pages/helpers/desiredCapabilities').options.desiredCapabilities;
var Serverconfig = require('./pages/helpers/desiredCapabilities').options.Server;
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

    //#region  
    await driver 
    .waitForElementByXPath("//*[@text='Skip tutorial']")
    .click()

    await driver 
    .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='+']]")
    .click()

    await driver 
    .waitForElementByXPath("//*[@text='I HAVE A \nGOAL.']")
    .click()

    await driver 
    .waitForElementByXPath("//*[@text='Continue']")
    .click()

    await driver 
    .waitForElementByXPath("(//*[@class='android.view.ViewGroup' and ./*[./*[@class='android.widget.ImageView']]])[2]")
    .click()

    //Enter a Goal Name
    await driver 
    .waitForElementByXPath("//*[@class='android.widget.EditText']")
    .sendKeys(randomName)

    console.log(randomName)

    ///Click on Continue button
    await driver 
    .waitForElementByXPath("//*[@text='Continue']")
    .click()

    await driver 
    .waitForElementByXPath("(//*[@class='android.widget.HorizontalScrollView'])[1]")
    .click()

    ///Enter a Goal Amount here
    await driver 
    .waitForElementByXPath("//*[@class='android.widget.EditText']")
    .sendKeys(10000)

    await driver 
    .waitForElementByXPath("//*[@text='MONTHLY']") 
    .click()

   ///Click on Continue button
   await driver 
   .waitForElementByXPath("//*[@text='Continue']")
   .click()

    await driver 
    .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='+']]")
    .click()

    await driver 
    .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='+']]")
    .click()

    ///Click on Continue button
    await driver 
    .waitForElementByXPath("//*[@text='Continue']")
    .click()

    await driver 
    .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='DATE']]")
    .click()
 
     await driver 
     .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='02']]")
     .click()
 
     await driver 
     .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='Ok']]")
     .click()

     await driver 
    .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='TIME']]")
    .click()
 
     await driver 
     .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='01:00 AM']]")
     .click()
 
     await driver 
     .waitForElementByXPath("//*[@class='android.view.ViewGroup' and ./*[@text='Ok']]")
     .click()
    
    ///Click on Continue button
    await driver 
    .waitForElementByXPath("//*[@text='Continue']")
    .click()
   
    await driver 
    .waitForElementByXPath("//*[@text='Continue']")
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