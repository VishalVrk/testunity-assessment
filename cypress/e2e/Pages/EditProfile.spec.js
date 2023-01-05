class EditProfile{
    title(value){
        cy.get("#user_title").select(value);
    }

    surname(value){
        cy.get("#user_surname").type(value);
    }

    firstname(value){
        cy.get("#user_firstname").type(value);
    }
    phone(value){
        cy.get("#user_phone").type(value);
    }

    dob(year,month,day){
        cy.get("#user_dateofbirth_1i").select(year);
        cy.get("#user_dateofbirth_2i").select(month);
        cy.get("#user_dateofbirth_3i").select(day);
    }

    Licenceperiod(value){
        cy.get("#user_licenceperiod").select(value);
    }
    Address(street,city,country,postcode){
        cy.get("#user_address_attributes_street").type(street);
        cy.get("#user_address_attributes_city").type(city);
        cy.get("#user_address_attributes_county").type(country);
        cy.get("#user_address_attributes_postcode").type(postcode);
    }
}
const editProfile = new EditProfile();
export default editProfile;