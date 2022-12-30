//class creation

class HomePage{

getUrl(){
    return cy.visit("https://dbiz-pmo.pipware.net/")
}
    getKPI(){
        cy.wait(2000)
        return cy.get('.dropdown-menu.header_dropDownMenu__1qHab.show').find('.dropdown-item[href="/kpis"]')
    }

    getValueHound(){
        return cy.get('[href="/valuedrivers"]')
    }
    
    
    getAnalysis(){
        return cy.get('.app-header > :nth-child(2) > :nth-child(2) > .dropdown-toggle')
    }

    getInitiatives(){
        cy.wait(3000)
        return cy.contains('Initiatives')
    }

    getManagement(){
    return cy.contains('Management')
  }
   
    getPortfolios(){
        return cy.contains('Portfolios')
    }

    getReports(){
        return cy.contains('Reports')
    }

    getUploads(){
        return cy.contains('Uploads')
    }

    getAdministration(){
        return cy.contains('Administration')
    }

    getImportsExports(){
        return cy.contains('Imports/Exports')
    }

    getUpcomingmeetings(){
        return cy.get('.far.fa-calendar-day')
    }

    gettextupcomingmeeting(){
        return cy.get('div[class="side-menu-header"] h2')
    }

    getMyAction(){
        return cy.get('.far.fa-calendar-check')
    }

    getTextMyAction(){
        return cy.get('.side-menu-header h2')
    }

    getHelp(){
        return cy.get('.far.fa-question-circle')
 }
 
    gettextHelp(){
        return cy.get('.side-menu-header h2')
 }

    getAdd(){
        return cy.get('span[class="dropdown"]')
    }

    getclickAnalysis(){
        cy.wait(3000)
     return cy.get('.app-header > :nth-child(2) > :nth-child(2) > .dropdown-toggle')
    }
}

export default HomePage;