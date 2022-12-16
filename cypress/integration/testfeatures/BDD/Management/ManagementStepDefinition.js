import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../PageObject/HomePage"
import Initiatives from "../PageObject/Initiatives"

const homePageObject = new HomePage()
const initiativesObject = new Initiatives()
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
    homePageObject.getManagement().click()
    

})

