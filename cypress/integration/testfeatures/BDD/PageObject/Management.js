//class creation

class Management{
    
    getMeetings(){
        return cy.get('a[href="/meetings/manage"]')
    }

    getRAR(){
        return cy.get('[href="/rars/current"]')
    }

    getRARAdministration(){
        return cy.get('a[href="/rars/search"]')
    }

    getMeetingAdd(){
        return cy.contains('Add')
    }

    getMeetingTitle(){
        return cy.get('input[name="name"]')

    }

    getPurpose(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
    }

    getPayOff(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2)')
    }

    getDescription(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2)')
    }

    getDetails(){
        cy.wait(2000)
        return cy.get('#k-panelbar-item-default-\.0 > .k-link')
    }

    getdatedetails(){
        return cy.get('input[role="spinbutton"]')
    }

    getaddreview(){
        return cy.get('div[class="profile-image k-link   add-reviewer"]')
    }

}
export default Management;