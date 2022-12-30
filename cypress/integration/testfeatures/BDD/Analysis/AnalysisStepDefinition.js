import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../PageObject/HomePage"
import KPI from "../PageObject/KPI"

const homePageObject = new HomePage()
const KPIObject = new KPI()
let owner

Given('Login to the application', function(){
    homePageObject.getUrl()
    

})

When('Provide the Username and Password for login',function(){
    cy.get('#userName').type(this.data.username)
    cy.get("#password").type(this.data.password)
    cy.Login()

})

Then('Verify successful login', function(){
   cy.get('.profile-image-content-text').should("have.text","SH")
   
})

//second testcase to verify all the components 
When('the listed components present in UI',function(){
    homePageObject.getAdd().should("contain","Add")
    homePageObject.getAnalysis().should("have.text","Analysis")
    homePageObject.getInitiatives().should("have.text","Initiatives")
    homePageObject.getManagement().should("have.text","Management")
    homePageObject.getPortfolios().should("have.text","Portfolios")
    homePageObject.getReports().should("have.text","Reports")
    homePageObject.getUploads().should("have.text","Uploads")
    homePageObject.getAdministration().should("have.text","RAR Administration")
    homePageObject.getImportsExports().should("have.text","Imports/Exports")
    homePageObject.getUpcomingmeetings().click()
    homePageObject.gettextupcomingmeeting().should("have.text","Upcoming Meetings")
    homePageObject.getMyAction().click()
    homePageObject.getTextMyAction().should("have.text","My Actions")
    homePageObject.getHelp().click()
    homePageObject.gettextHelp().should("have.text","Help")

})

//third one

When('Navigate to Analysis list and select KPI tab',function(){
    cy.wait(2000)
    homePageObject.getclickAnalysis().click()
    homePageObject.getKPI().click()
    
})

Then('Check by sorting  All KPIs in order of appliying filter with Owner',function(){
    KPIObject.getKPIFilter().click({force: true})
    KPIObject.getOwnerTab().type(this.data.owner)
    KPIObject.getOwnerTab().type('{enter}')
    KPIObject.getFilterOFF().click({force: true})
    cy.wait(3000)
   
   // cy.SortOwnerValidation()
    cy.get('tr td:nth-child(4)').each(($e1,index,$list)=>{
        owner = $e1.text()
        cy.log(owner)
       cy.log($e1.text())
        expect($e1.text()).is.equal(this.data.owner)
        })
})
//4th
Then('Check the individual KPI  chart by clicking on specific name',function(){
    KPIObject.getKPICode().click()
    KPIObject.getchart().should("have.text","Chart")
    KPIObject.getConfigure().should("have.text","Configure")
    KPIObject.getKPIValues().should("have.text","KPI Values")

})
//5th
Then('Checking on respective values of KPIs',function(){

    KPIObject.getNodataInfo().each(($e1,index,$list)=>{
        cy.log($e1.text())
        
    })
   
})
//6th
Then('Verify the review date by clicking on reference Tab',function(){
KPIObject.getReference().click({force: true})
//cy.log(owner)
cy.get('.k-content.k-window-content').find('td:nth-child(3)').should('have.text',this.data.owner)

})

//7th
When('Navigate to Analysis list and select Value Hound tab',function(){
    cy.wait(2000)
    homePageObject.getclickAnalysis().click()
    homePageObject.getValueHound().click()
    
})

Then('Apply filter with Definition',function(){
    KPIObject.getvaluehoundFilter().click()
    KPIObject.getTypeDefinition().type(this.data.Definition)
    KPIObject.getTypeDefinition().type('{enter}')
    KPIObject.getFilterapplied().click({force:true})

})

//8th

When('Navigate to addFolder tab to add Folder',function(){
    cy.AddFolder()
  })

Then('Navigate to AddVDT tab to addVDT',function(){
    cy.AddVDT()
})

//9th

Then('Navigate to Add to library, Analysis, Copy and Configuration button to add them',function(){
    //not authorized to add icons tabs info
    //KPIObject.getIcons().click({ multiple: true })
    KPIObject.getIcons()

})