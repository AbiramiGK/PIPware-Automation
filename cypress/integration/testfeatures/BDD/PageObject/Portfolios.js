//class creation

class Portfolios{
    
   getLeftTopView(){
    return cy.get('.k-switch-container')
   }

   getinfounderTopView(){
    return cy.get('div[class="side-menu-header mb-0"] h2')
   }

   geInfounderTopViewTwo(){
    return cy.get('div[class=" h-100 w-100"] h2')
   }

   getInfoOfSite(){
    return cy.get('.app-breadcrumb-item.active')
   }

   getPortfolio(){
    return cy.get('span[class="k-in k-state-selected"] span span[class="fa-fw me-2 far fa-bookmark"]')
   }
    

}
export default Portfolios;