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

When('Navigate to initiatives tab and select Initiatives',function(){
    homePageObject.getInitiatives().click()
    cy.wait(2000)
    initiativesObject.getInitiatives().click()

})

Then('Verify the Action bar contains components as Filter , Add download symbol and column picker icon',function(){
    initiativesObject.getFilter().should('have.text',"Filter")
    initiativesObject.getAddButton().should('contain',"Add")
    initiativesObject.getDownloadButton().invoke('show')
    initiativesObject.getConfigure().click({force:true})
    initiativesObject.getcolumnpicker().should('have.text',"Column Picker")

})

//2nd testcase

Then('Check list and card view of initiatives',function(){
    initiativesObject.getcardlist().click()
    //implementation in commands file
    cy.AssertVerifyCardView()
    initiativesObject.getdetailedview().click()
    //back to list view
    initiativesObject.getcardlist().click()
    cy.AssertVerifyListView()
   })

//3rd testcases

Then('Check Pipeline and concept of initiatives',function(){
    initiativesObject.getPipelineConcept().click()
    initiativesObject.getIdeaOwner().should('contain',"Idea Owner")

})
//4th
Then('Verify the Action bar contains components as Filter and apply filter based on need',function(){
    cy.InitiativesFilterApply()

})

//5th

Then('Checking the stage of specific initiatives and its value',function(){
    cy.StageVerify()

})

//6th 

Then('Select Download Icon and select the format as PDFandExcel',function(){
    cy.PDFEXCELSELECT()

})
//7th

When('Navigate to initiatives tab and select Settings PipelineTarget',function(){

    cy.PipelineTargetSelect()

})

Then('Check the hide archive checkbox feature and verify the resultant value doesnt contain the archive row',function(){
    initiativesObject.getarchiveselect().check().should('be.checked')
    initiativesObject.getHideArchive().check().should('be.checked')

})
//8th
Then('Add by adding info under Add, for delete the select delete icon',function(){
    initiativesObject.getAddPipeline().type("AddPipeLine")
    initiativesObject.getAddPipeline().type('{enter}')
    initiativesObject.getdeletepipeline().each(($e1,index,$list)=>{
    const deletevar = $e1.text()
    cy.log(deletevar)
    if(deletevar == "AddPipeLine"){
    cy.get('.far.fa-trash-alt').click()
}
    })

})

//9th

Then('Select to go the target page contains Bottomup and TopDown  target  to view the total site target',function(){
    cy.BottomTOPVerify()

})