class dashboardPage {

    welcomeTxt() {
        return cy.get('#welcome')
    }

    logoutTxt() {
        return cy.contains('Logout')
    }
    getReservationDropdown() {
        return cy.xpath("//span[normalize-space()='Reservations']")
      }
    
      getQuickSaveButton() {
        return cy.getByTestID('quick-save-order-button')
      }
    
      get nextStepButton() {
        return cy.getByTestID('go-customer-tab-button')
      }
    
      get goToBillingTabButton() {
        return cy.getByTestID('goto-next-button')
      }
    
      get additionalInfoInput() {
        return cy.getByTestID('additional-info-input')
      }
    
      get createReservationButton() {
        return cy.getByTestID('create-reservation-button')
      }
    
      //END
      //Reservation Page Tabs
      getDatesAndVehicleTab() {
        return cy.get("[data-cy='dates-vehicles-tab']")
      }
    
      getCustomerTab() {
        return cy.get("[data-cy='customer-tab']")
      }
    
      getBillingTab() {
        return cy.get("[data-cy='billing-tab']")
      }
      //END
    
      //Reservation Form //Date and Vehicles Tab
      get rentalDatePicker() {
        return cy.getByTestID('open-calendar-button')
      }
    
      getStatusDropdown() {
        // return cy.get("[data-cy='select-status']")
        return cy.getByTestID('select-status')
      }
    
      getAddNewCarBtn() {
        return cy.get("button[data-cy='add-entity-button']")
      }
    
      getCarTypeToggleBtn() {
        return cy.get("[data-cy='own-partner-swither']")
      }
    
      //Reservation Form //Customer Tab
      get searchCustomerInput() {
        return cy.getByTestID('search-customer-input')
      }
      getAddClientAgencyBtn() {
        return cy.get("button[data-cy='add-client-agency-button']")
      }
    
      getDriverSearchCheckbox() {
        return cy.get("[data-cy='driver-search-checkbox']")
      }
      getDriverIcon() {
        return cy.contains('driver').find("button[aria-label='delete']")
      }
    
      get searchClientInput() {
        return cy.getByTestID('search-client-input')
      }
    
      getAddNewDriverBtn() {
        return cy.get("[data-cy='add-driver-button']")
      }
    
      getPickUpLocation() {
        return cy.getByTestID('start-address-container')
      }
    
      get getDropOffLocation() {
        return cy.getByTestID('end-address-container')
      }
    
      get vehicleSearchField() {
        return cy.getByTestID('search-field-input')
      }
    
      get vehicleTabRow() {
        return cy.getByTestID('mobile-vehicle-table-row')
      }
    
      get reservationVehicleName() {
        return cy.getByTestID('reservation-vehicle-name')
      }
    
      get reservationCustomer() {
        return cy.getByTestID('reservation-customer')
      }
}

export default dashboardPage