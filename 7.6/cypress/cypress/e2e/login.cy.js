
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should be test successful open page', () => {
    cy.contains("Books list").should("be.visible");
  });

  it('should be test successful login', () => {
    cy.contains('Log in').click()
    cy.get('#mail').type('bropet@mail.ru');
    cy.get('#pass').type('123');
    cy.contains('Submit').click();
    //cy.login('bropet@mail.ru', '123')
    cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible');
  });

  it('should be test empty email', () => {
   cy.contains('Log in').click()
    cy.get('#mail');
    cy.get('#pass').type('123');
    cy.contains('Submit').click();
    //cy.login('null', '123')
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле");
  });

  it('should be test wrong password', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Log in').click();
    cy.get('#mail').type('bropet@mail.ru');
    cy.get('#pass').type('1');
    cy.get('[type=submit]').click();
    cy.get('#pass')
      .then(($el) => $el[0].checkValidity())
      .should("be.true");
    cy.contains("Неправильая почта или пароль").should("be.visible");
    });
})
describe("check favorite books", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.contains('Log in').click();
    cy.get('#mail').type('bropet@mail.ru');
    cy.get('#pass').type('123');
    cy.get('[type=submit]').click();
  });


  it('should be test add new book', () => {
      cy.contains('Add new').click();
      cy.get('#title').click();
      cy.get('#title').type('Война и мир');
      cy.get('[type=submit]').click();
    });

    it('should be test add new book in favorite', () => {
      cy.contains('Add to favorite').click();
      cy.contains("Война и мир").should("be.visible");
  });

    it("should be test delete book favorites", () => {
      cy.get('h4').click();
      cy.contains("Delete from favorite").click();

  });
});

