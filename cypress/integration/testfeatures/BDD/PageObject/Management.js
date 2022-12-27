//class creation

class Management{
    
    getMeetings(){
        return cy.get('a[href="/meetings/manage"]')
    }

    getRAR(){
        return cy.get('[href="/rars/current"]')
    }

    getRARAdministration(){
       // return cy.frameLoaded('a[href="/rars/search"]')
        //return cy.get('a[href="/rars/search"]')
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

    getpanel(){
        return cy.get('div[role="tree"]')
    }

    getstartDate(){
        return cy.get('.k-dateinput-wrap')
    }

    getStartTime(){
        return cy.get(':nth-child(1) > :nth-child(2) > .k-widget > .k-dropdown-wrap > .k-select > .k-icon')
    }

    getDuration(){
        return cy.get('#hours > .k-select > .k-icon')
    }

    getReminder(){
        return cy.get('.container-fluid > :nth-child(2) > :nth-child(1) > .k-widget > .k-dropdown-wrap > .k-select > .k-icon')
    }

    getTimeZone(){
        return cy.get(':nth-child(3) > .k-widget > .k-dropdown-wrap > .k-select > .k-icon')
    }

    getReoccurance(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)')
    }

    getCategories(){
        return cy.get('div[class="form-group col-md-6"] span[class="k-input"]')
    }

    getSaveButton(){
        return cy.get('.button-text')
    }

    getMeetingQues(){
        return cy.get(':nth-child(1) > .k-widget > .k-dropdown-wrap > .k-input')
    }

    getLocation(){
        return cy.get('input[name="location"]')
    }

    getCOnfirmation(){
        return cy.get('.k-dialog-buttongroup > :nth-child(2)')
    }

    getFilter(){
        return cy.contains('Filter')
    }

    getfilterorganization(){
        return cy.get('.k-radio-label')
    
    }

    getApplyFilter(){
        return cy.get('span[class="far fa-filter fa-fw"]')
    }

    getverifyMeeting(){
        return cy.get('.k-task')
    }

    getseriesCalenderView(){
        return cy.get('.k-switch-handle')
    }

    getCalenderView(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2) > span:nth-child(1)')
    }

    getverifier(){
        return cy.get('div[class="detail"]:nth-child(2)')
    }

    getverifierdetails(){
        return cy.get('div[class="navbar actionbar rar-section-nav"] div[class="navbar-brand"]')
    }

    getResultVerify(){
        return cy.get('a[class="nav-link  active "]')
    }

    getRARAdminReviewer(){
        return cy.get('span[aria-expanded="false"] span[class="k-dropdown-wrap k-state-default"]')
    }

    getRARAdminReviewee(){
        return cy.contains('All Reviewees')
    }

    getRARAdminFilter(){
        return cy.get('button[class="btn btn-primary"]')
    }

    getRARAdminverify(){
        return cy.get('a[class="k-grid-onclick-reviewee"]')
    }

    

}
export default Management;