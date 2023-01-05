class HomePage{

    validateMenus(menus){
        cy.contains(menus);
        return this;
    }

    validateEmail(email){
        cy.get('body > div.content > h4').should("have.text",email)
    }
}

const homepage = new HomePage();
export default homepage;
