import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../PageObject/HomePage"
import Initiatives from "../PageObject/Initiatives"
import Management from "../PageObject/Management"

const homePageObject = new HomePage()
const initiativesObject = new Initiatives()
const ManagementObject = new Management()
let Initiativeowner

Given('Login to the application', function(){
     homePageObject.getUrl()
    

})

When('Provide the Username and Password for login',function(){
    cy.get('#userName').type(this.data.username)
    cy.get("#password").type(this.data.password)
    cy.Login()

})

//1st

When('Navigate to Management  tab and select Meetings',function(){

    cy.SelectMeetings()
    
})

When('Click ADD button and provide information under details part and save',function(){
    cy.AddMeeting()
    cy.AddDetails()

})

//2nd

When('Navigate to Management  tab and select RARS',function(){
    homePageObject.getManagement().click()
    ManagementObject.getRAR().click()
    ManagementObject.getaddreview().click()
    

})

When('Click icon and try adding the reviewer details and do save',function()
{
cy.get('.profile-image-bot > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click()
cy.get('.profile-image-bot > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').type("Abi")
cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)').type('{enter}')
cy.get('.button-text').click()

})

Then('Click “Reset” button to unfilter all',function(){

})
