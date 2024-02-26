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
        cy.addToFavorite();
      })
      it("Should delete book from favourite", () =>{
        cy.login("test@test.com", "test");
        cy.addNew("Book name","Book description", "Book author");
        cy.addToFavorite();
        cy.get('button').contains("Delete from favorite").click();
      }
      )
})
