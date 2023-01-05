// require('@cypress-xpath');

class LoginPage{
    Login(username, password){
        cy.get('#email').clear();
        cy.get('#email').type(username);
        cy.get('#password').clear();
        cy.get('#password').type(password);
        cy.get('#login-form > div:nth-child(3) > input').click();
        // cy.xpath("//*[@value='Log in']").click()
        cy.wait(10000)
      }

      LoginError(){
          cy.get('#login-form > div:nth-child(2) > span > b').should('have.text',"Enter your Email address and password correct")
      }
}

const loginPage = new LoginPage();
export default loginPage;