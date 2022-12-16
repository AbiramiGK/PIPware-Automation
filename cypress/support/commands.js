// ***********************************************

import KPI from "../integration/testfeatures/BDD/PageObject/KPI"
import Initiatives from "../integration/testfeatures/BDD/PageObject/Initiatives"
import HomePage from "../integration/testfeatures/BDD/PageObject/HomePage"


const KPIObject = new KPI()
const initiativesObject = new Initiatives()
const homePageObject = new HomePage()
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add("UserName",(UserName)=>{
//     cy.get('#userName').type(UserName)
// })

// Cypress.Commands.add("Password",(Password)=>{
//     cy.get("#password").type(Password)
// })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add("Login",()=>{
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add("SortOwnerValidation",()=>{
cy.get('tr td:nth-child(4)').each(($e1,index,$list)=>{
var value = cy.log($e1.text())
expect(value).is.equal("IT Manager")
})
})

Cypress.Commands.add("AddFolder",()=>{
  KPIObject.getaddFolder().each(($e1,index,$list)=>{
    const Addfolder = $e1.text()
    if(Addfolder == "Add Folder"){
cy.wrap($e1).click()
    }
   
})

//details to be added in addfolder part
KPIObject.getName().type("ValueHoundName")
KPIObject.getDescription().type("TestREFERANCE")
KPIObject.getFolderSave().click()

//verify and click folder
KPIObject.getnameverify().click({force:true})

})

//AddVDT
Cypress.Commands.add("AddVDT",()=>{
  KPIObject.getAddVDT().click()
  KPIObject.getMining().click({force: true})

  //AddVDT INFO
  KPIObject.getName().type("ValueHoundVDT")
  KPIObject.getDescription().type("VDTDescription")
  KPIObject.getVDTADD().click()
  KPIObject.getback().click()
  KPIObject.getverifyvdtdescrip().each(($e1,index,$list)=>{
let VDTin = $e1.text()
if(VDTin == "VDTDescription"){
  expect(VDTin).is.equal("VDTDescription")
  cy.wrap($e1.click())
}
  })
})

//assert statement
Cypress.Commands.add("AssertVerifyCardView",()=>{
  cy.contains('Evaluating').should('contain',"Evaluating")
  cy.contains('Implementing').should('contain',"Implementing")
  cy.contains('Cash Flowing').should('contain',"Cash Flowing")
  cy.contains('Locked-in').should('contain',"Locked-in")
})

Cypress.Commands.add("AssertVerifyListView",()=>{
  cy.contains('Code').should('have.text',"Code")
  cy.contains('Name').should('have.text',"Name")
  cy.contains('Owner').should('have.text',"Owner")
  cy.get(':nth-child(5) > .k-link').should('have.text',"Portfolio")
  cy.contains('Stage').should('have.text',"Stage")
  cy.get(':nth-child(7) > .k-link').should('have.text',"Value")
  cy.contains('BCM').should('have.text',"BCM")
  cy.contains('Status').should('have.text',"Status")
})

Cypress.Commands.add("InitiativesFilterApply",()=>{
  initiativesObject.getFilter().click({force:true})
  initiativesObject.getInitiativesFilter().type("IT Manager")
  initiativesObject.getInitiativesFilter().type('{enter}')
  initiativesObject.getfilterbutton().click({force:true})
})

Cypress.Commands.add("StageVerify",()=>{
  initiativesObject.getcodevalue().each(($e1,index,$list)=>{
    const code = $e1.text()
    cy.log(code)
    if(code.includes("UG_004")){
      cy.get('td:nth-child(5)').eq(index).next().then(function(codestage){
        const codesib =codestage.text()
        cy.log(codesib)
        expect(codesib).to.contains('Implementing');

      })
    }

  })

})

Cypress.Commands.add("PDFEXCELSELECT",()=>{
  initiativesObject.getDownloadButton().click()
  cy.contains("PDF").should('contain',"PDF")
  cy.contains("PDF").click({force:true})
  initiativesObject.getDownloadButton().click()
  cy.contains("Excel").should('contain',"Excel")
  cy.contains("Excel").click({force:true})
})

Cypress.Commands.add("PipelineTargetSelect",()=>{
  homePageObject.getInitiatives().click()
    cy.wait(2000)
    initiativesObject.getPipelineTarget().each(($e1,index,$list)=>{
    cy.log($e1.text())
    cy.wrap($e1).click({force:true})
    })
})

Cypress.Commands.add("BottomTOPVerify",()=>{
  initiativesObject.getBottomup().click()
  initiativesObject.getBottomtopverify().should('contain',"Bottom ")
  initiativesObject.getbackbutton().click()
  initiativesObject.getTopup().click()
  initiativesObject.getBottomtopverify().should('contain',"Top ")
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  if (err.message.includes('An uncaught error was detected outside of a test')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })