import userData from '../fixtures/user-data.json'

describe('automation site orange', () => {

const selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: '.oxd-button',
  dashboardHeader: '.oxd-topbar-header-breadcrumb > .oxd-text',
  WrongCredentialAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  secundNameField: "[name='middleName']",
  lastNameField: '[name="lastName"]',
  fullNameField: '[name="nickName"]',
  employeedIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
  gerericField: '[.oxd-input--active]',
  dateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
}

  it.only('user info update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.dashboardHeader).should('contain', 'Dashboard')
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type(userData.userSuccess.fullname)
    cy.get(selectorslist.secundNameField).clear().type(userData.userSuccess.secundName)
    cy.get(selectorslist.lastNameField).clear().type(userData.userSuccess.lastName)
    cy.get(selectorslist.employeedIdField).clear().type(userData.userSuccess.employeedId)
    cy.get(selectorslist.dateField).eq(0).clear().type('2025-10-01')
    cy.get(selectorslist.dateField).eq(1).clear().type('2025-11-12')
   // cy.get(selectorslist.gerericField).eq(5).type('OtherIdtest')
   // cy.get(selectorslist.gerericField).eq(6).type('DriversLicenseNumbertest')
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.WrongCredentialAlert)
    
  })
})