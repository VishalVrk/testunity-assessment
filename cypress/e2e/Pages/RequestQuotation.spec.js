class RequestQuotation{

    breakdownCover(value){
        cy.get('#quotation_breakdowncover').select(value);
    }

    windScreen(value){
        if (value=="yes") {
            cy.get('#quotation_windscreenrepair_t').click();
        }if(value=="no"){
            cy.get('#quotation_windscreenrepair_f').click();
        }
    }

    incidents(value){
        cy.get('#quotation_incidents').type(value);
    }

    registration(value){
        cy.get('#quotation_vehicle_attributes_registration').type(value);
    }

    milage(value){
        cy.get('#quotation_vehicle_attributes_mileage').type(value);
    }

    estimate(value){
        cy.get('#quotation_vehicle_attributes_value').type(value);
    }

    parkingLoc(value){
        cy.get('#quotation_vehicle_attributes_parkinglocation').select(value);
    }

    startPolicy(year,month,day){
        cy.get('#quotation_vehicle_attributes_policystart_1i').select(year);
        cy.get('#quotation_vehicle_attributes_policystart_2i').select(month);
        cy.get('#quotation_vehicle_attributes_policystart_3i').select(day);
    }

    calculatePremium(){
        cy.contains('Calculate Premium').click()
    }

    resetForm(){
        cy.contains('Reset form').click()
    }

    saveQuotation(){
        cy.contains('Save Quotation').click()
    }
}

const reqQuote = new RequestQuotation();
export default reqQuote;