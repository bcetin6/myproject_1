describe('Cura Make Appointment', function(){

    it('Visit the URL', function(){

        cy.visit('https://katalon-demo-cura.herokuapp.com/');


    });

    it('Click on Make Appointment', () => {
        //btn-make-appointment click on this
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

    });

    it('Click on Make Appointment', () => {
        //select - Hongkong CURA Healthcare Center 
        cy.get('select').select('Hongkong CURA Healthcare Center');
        //checkbox click - #chk_hospotal_readmission
        cy.get('#chk_hospotal_readmission').click();
        //checkbox click - #radio_program_medicaid
        cy.get('#radio_program_medicaid').click();
        //input date - #txt_visit_date
        cy.get('#txt_visit_date').type('30/03/2022');
        //add comment - #txt_comment
        cy.get('#txt_comment').click({force:true});
        cy.get('#txt_comment').type('couldnt book the appointment');
        //click book appointment - btn-book-appointment
        cy.get('#btn-book-appointment').click();
        });

    it('Verify Appointment', () => {
        //appointment confirmation - h2: Appointment Confirmation
        cy.get('h2').contains('Appointment Confirmation');
        cy.get('#comment').contains('couldnt book the appointment');

    })


})