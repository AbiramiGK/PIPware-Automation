import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../PageObject/HomePage"
import Initiatives from "../PageObject/Initiatives"
import Portfolios from "../PageObject/Portfolios"

const homePageObject = new HomePage()
const initiativesObject = new Initiatives()
const portfoliosObject = new Portfolios()


Given('Login to the application', function(){
    homePageObject.getUrl()
    

})

When('Provide the Username and Password for login',function(){
    cy.get('#userName').type(this.data.username)
    cy.get("#password").type(this.data.password)
    cy.Login()

})

When('Navigate to Portfolios  tab',function(){
    cy.wait(2000)
    homePageObject.getPortfolios().click()

})

Then('Enable left or top mode to view the portfolio management information',function(){
    //Top view
    cy.PortfoliosVerify()
    //LeftView
    portfoliosObject.getLeftTopView().click()
})

When('Click on particular Portfolio to view the respective dashboards details initiatives wokplan Risk Dependencies and resources',function(){
    portfoliosObject.getPortfolio().click().each(($e1,index,$list)=>{
        cy.log($e1.text())
    })

    //cy.get(':nth-child(3) > .k-mid > .k-in > [title=""]')
})