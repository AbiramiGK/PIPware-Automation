//class creation

class Initiatives{

getInitiatives(){
    return cy.get('[href="/initiatives"]')
}

getFilter(){
    return cy.get('#filterButton')
}

getAddButton(){
    return cy.get('#addButton')
}

getDownloadButton(){
    return cy.get('#downloadButton')
}

getConfigure(){
    return cy.get('.far.fa-cog')
}

getcolumnpicker(){
    return cy.get('div[class="side-menu-header"] h2')
}

getPipelineConcept(){
    cy.wait(2000)
    return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(4)')
}

getcardlist(){
    return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2) > span:nth-child(1)')
}

getdetailedview(){
    return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(2) > span:nth-child(1)')
    
}

getIdeaOwner(){
    return cy.contains('Idea Owner')
}

getInitiativesFilter(){
    return cy.get('#ownerPersonFilterDropdown')
}

getfilterbutton(){
    return cy.get('button[type="submit"]')
}

getcodevalue(){
    return cy.get('tr td:nth-child(2)')
}

getPipelineTarget(){
    return cy.get('[href*="/settings/pipeline/targetPeriods"]')
}

getarchiveselect(){
    return cy.get('tr:nth-child(2) td:nth-child(6)').find('.k-checkbox')
}

getHideArchive(){
    return cy.get('div[class="text-end mb-2"] span[class="k-state-default"]').find('.k-checkbox')
}

getAddPipeline(){
    return cy.get('input[placeholder*="+ Add"]')
}

getdeletepipeline(){
    return cy.get('tr td:nth-child(1)')
}

getBottomup(){
    return cy.get('tbody tr:nth-child(1) td:nth-child(7) button:nth-child(2) span:nth-child(1)')
}

getBottomtopverify(){
    return cy.get('.eclipse-display.d-block.ps-0.pe-1')
}

getTopup(){
    return cy.get('tbody tr:nth-child(1) span[class="far fa-arrow-from-top"]')
}

getbackbutton(){
    return cy.get('.far.fa-arrow-left.fa-fw')
}


}

export default Initiatives;