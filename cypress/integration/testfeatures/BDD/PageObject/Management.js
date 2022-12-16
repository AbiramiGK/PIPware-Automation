//class creation

class Management{
    
    getMeetings(){
        return cy.get('a[href="/meetings/manage"]')
    }

    getRAR(){
        return cy.get('a[href="/rars/current"]')
    }

}
export default Management;