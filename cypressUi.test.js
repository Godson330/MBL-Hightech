describe('UI Interactions', () => {
  
  // Test for that user can login with valid username and password
  it('should allow user to log in', () => {
    cy.visit('https://newapp.com/');
    cy.get('input[name="username"]').type('joe2');
    cy.get('input[name="password"]').type('josh');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, joe3').should('be.visible'); // Optional: Verify welcome message
  });

  // Test that user can create item,and displays actual response is same as expected
  it('should allow user to create an item', () => {
    cy.visit('https://newapp.com/items');
    cy.get('input[name="name"]').type('football');
    cy.get('button[type="submit"]').click();
    cy.contains('Item created successfully').should('be.visible'); // Optional: Verify success message
    cy.contains('football').should('be.visible');
  });

  // Additional test for deleting an item
  it('should allow user to delete an item', () => {
    cy.visit('https://newapp.com/items');
    cy.contains('football').parent().find('button.delete').click(); // Assuming there's a delete button
    cy.contains('football').should('not.exist'); // Verify the item is deleted
  });
  
  // Additional test for updating an item
  it('should allow user to update an item', () => {
    cy.visit('https://newapp.com/items');
    cy.contains('football').parent().find('button.edit').click(); // Assuming there's an edit button
    cy.get('input[name="name"]').clear().type('soccer ball');
    cy.get('button[type="submit"]').click();
    cy.contains('Item updated successfully').should('be.visible'); // Optional: Verify success message
    cy.contains('soccer ball').should('be.visible');
  });

});
