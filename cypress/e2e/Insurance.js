import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./Pages/LoginPage.spec";
import homepage from './Pages/HomePage.spec';
import reqQuote from './Pages/RequestQuotation.spec';
import editProfile from './Pages/EditProfile.spec';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

When("I open the Insurance Application", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php");
});

Then("I enter email {string} and password {string}" , (email,password)=>{
    loginPage.Login(email,password)
});

Then("I should see error message on the screen", ()=>{
loginPage.LoginError();
});

Then("I should see {string} email logged in", (email)=>{
    homepage.validateEmail(email)
})

Then("I should see menus in home page", (datatable)=>{
    datatable.hashes().forEach(element => {
        homepage.validateMenus(element.menu_name);
    });
})

Then("I click {string}",(value)=>{
    cy.contains(value).click()
})

Then("I wait {int} for sec",(time)=>{
    cy.wait(time*1000)
})

Then("I store identification number",()=>{
   cy.get('body').then(($intentNo)=>{
    $text = $intentNo.text().replace(/\D/g,'');
    console.log($text);
})
})

Then("I enter identification number and click retrive",()=>{
    cy.get("#tabs-3 > form > input[type=text]:nth-child(1)").type($text);
    cy.get("#getquote").click();
})

Then("I should see {string} text",(value)=>{
    cy.contains(value);
})

Then("I enter the values in Request Quotation", (datatable)=>{
    datatable.hashes().forEach(row=>{
        reqQuote.breakdownCover(row.cover);
        reqQuote.windScreen(row.screen);
        reqQuote.incidents(row.incidents);
        reqQuote.registration(row.registration);
        reqQuote.milage(row.milage);
        reqQuote.estimate(row.estimate);
        reqQuote.parkingLoc(row.parking);
        reqQuote.startPolicy(row.year,row.month,row.day);
    })
})

Then("I enter the values in Edit profile", (datatable)=>{
    datatable.hashes().forEach(row=>{
        editProfile.title(row.title);
        editProfile.surname(row.surname);
        editProfile.firstname(row.firstname);
        editProfile.phone(row.phone);
        editProfile.dob(row.year,row.month,row.day);
        editProfile.Licenceperiod(row.Licenceperiod);
        editProfile.Address(row.street,row.city,row.country,row.postcode);
    })
})

Then("I check the values in the Retrive Quotation",(datatable)=>{
    datatable.hashes().forEach(row=>{
        cy.get("body > table > tbody > tr:nth-child(2) > td:nth-child(2)").should("have.text",row.cover)
        cy.get("body > table > tbody > tr:nth-child(3) > td:nth-child(2)").should("have.text",row.screen)
        cy.get("body > table > tbody > tr:nth-child(5) > td:nth-child(2)").should("have.text",row.incidents)
        cy.get("body > table > tbody > tr:nth-child(6) > td:nth-child(2)").should("have.text",row.registration)
        cy.get("body > table > tbody > tr:nth-child(7) > td:nth-child(2)").should("have.text",row.milage)
        cy.get("body > table > tbody > tr:nth-child(8) > td:nth-child(2)").should("have.text",row.estimate)
        cy.get("body > table > tbody > tr:nth-child(9) > td:nth-child(2)").should("have.text",row.parking)
        cy.get("body > table > tbody > tr:nth-child(10) > td:nth-child(2)").should("have.text",row.date)
    })
})