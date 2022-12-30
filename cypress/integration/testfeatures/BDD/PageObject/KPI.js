class KPI{
    getKPIFilter(){
        return cy.get('.far.fa-filter')
    }

    getOwnerTab(){
        return cy.get('#kpi-list-filter-owner-lookup')
         
    }
    getouterclick(){
        return cy.get('.side-menu-body')
    }

    getTag(){
        return cy.get('input[placeholder="Type to see Tags - Press Enter to add."]')
    }

    getFilterOFF(){
        return cy.get('button[type="submit"]')
    }

    getKPICode(){
        cy.wait(2000)
        return cy.get('tbody tr:nth-child(2) td:nth-child(2) a:nth-child(1)')
    }   

    getchart(){
        return cy.contains('Chart')
    }

    getConfigure(){
        return cy.contains('Configure')
    }

    getKPIValues(){
        return cy.contains('KPI Values')
    }

    getData(){
        return cy.get('.form-label')
    }

    getNodataInfo(){
        return cy.get('.kpi-chart-data').find('.kpi-chart-metric')
    }

    getReference(){
        return cy.contains('References')
    }

    //valuehound

    getvaluehoundFilter(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)')
    }

    getTypeDefinition(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1) > input:nth-child(1)')
    }

    getFilterapplied(){
        return cy.get('button[type="submit"]')
    }

    getaddFolder(){
        return cy.get('span[class="button-text"]')
    }

    getName(){
        return cy.get('input[name="name"]')

    }

    getDescription(){
        return cy.get('input[name="description"]')
    }

    getFolderSave(){
        return cy.get('button[type="submit"]')
    }

    getnameverify(){
        return cy.contains('ValueHoundName')
    }

    getAddVDT(){
        return cy.contains('Add VDT')
    }

    getMining(){
        return cy.contains('Mining')
    }

    getVDTADD(){
        return cy.get('.mt-3 > .k-button')
    }

    getback(){
        return cy.get('.far.fa-arrow-left.fa-fw')
    }

    getverifyvdtdescrip(){
        return cy.get('tr td:nth-child(3)')
    }

    getIcons(){
        return cy.get('tr:nth-child(1) button[class="k-button k-flat k-button-icon"]')
    }
}

export default KPI;