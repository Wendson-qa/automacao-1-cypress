describe('automation site orange', () => {

const selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: '.oxd-button',
  dashboardHeader: '.oxd-topbar-header-breadcrumb > .oxd-text',
  WrongCredentialAlert: '.oxd-alert'
}

  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.dashboardHeader).should('contain', 'Dashboard')
  })

  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('test')
    cy.get(selectorslist.passwordField).type('test')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.WrongCredentialAlert)
    
  })
})