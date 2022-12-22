import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../PageObject/HomePage"
import Initiatives from "../PageObject/Initiatives"
import Management from "../PageObject/Management"

import 'cypress-iframe'

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

    //schedule the meeting

    cy.AddMeeting()
    cy.AddDetails()

})

When('Click FILTER button and provide a filter value to view the  filtered meeting',function(){
    ManagementObject.getFilter().click()
    ManagementObject.getfilterorganization().each(($e1,index,$list)=>{
        cy.log($e1.text())
        const org =$e1.text()
        if(org == "Organiser"){
            cy.wrap($e1).click()
        }
    })
    ManagementObject.getApplyFilter().click()
    ManagementObject.getverifyMeeting().each(($e1,index,$list)=>{
        cy.log($e1.text())
        const meetingverify = $e1.text()

        if(meetingverify == "DemoMeeting"){
            ManagementObject.getverifyMeeting().should("have.text","DemoMeetingDemoMeeting")
        }

    })

    })

    Then('Click on series tab to view them in series mode, click again to view in calender mode',function(){
        ManagementObject.getseriesCalenderView().click()
        cy.contains('DemoMeeting').should("have.text","DemoMeeting")
        ManagementObject.getCalenderView().click()


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
cy.get('.profile-image-bot > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').type("supply chain manager")
cy.get('.profile-image-bot > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').type('{enter}')
cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)').type('{enter}')
cy.get('.button-text').click()

})

Then('Provide Results KPIs Initiatives Resources reports Actions and Review information',function(){
    homePageObject.getManagement().click()
    ManagementObject.getRAR().click()
    ManagementObject.getverifier().each(($e1,index,$list)=>{
        cy.log($e1.text())
      const select =  $e1.text()
      if(select == "PMO_Director "){
        cy.wrap($e1).click()
      }

    })

    ManagementObject.getverifierdetails().find('.nav-bar').each(($e1,index,$list)=>{
        cy.log($e1.text())
        ManagementObject.getResultVerify().should('have.text',"Results")





    })


})

//4th

When('Navigate to Management  tab and select RARS Administration',function(){

    homePageObject.getManagement().click()
    //cy.frameLoaded('.dropdown-item.header_childActive__1mDmy')
    cy.iframe().find('.dropdown-item.header_childActive__1mDmy').click()
    //cy.frameLoaded('a[href="/rars/search"]')
    //ManagementObject.getRARAdministration().click()

})

When('Provide Reviewer and Reviewee information and select filter option  to view the selected information',function(){
    cy.RARADMINFIlter()


})
