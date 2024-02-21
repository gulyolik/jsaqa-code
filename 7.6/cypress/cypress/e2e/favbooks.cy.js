describe("The first task tests", ()=>{
    beforeEach(() =>{
      cy.visit('/');
    })
      it("Should add a new book",() =>{
        cy.login("test@test.com", "test");
        cy.addNew("Book name","Book description", "Book author");
      })
      it("Add to favourite", () =>{
        cy.login("test@test.com", "test");
        cy.addNew("Book name","Book description", "Book author");
        cy.addToFavorite;
      })
      it("Should log out", () =>{
        cy.login("test@test.com", "test");
        cy.get('button').contains('Log out').click();
        cy.get('button').contains("Log in").should('be.visible');
        cy.contains("Добро пожаловать").should("not.exist");
      }
      )
})
