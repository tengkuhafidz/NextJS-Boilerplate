describe('login', () => {
	it('should login successfully given valid user credentials', () => {
		cy.visit('/')
		cy.findByText('Hello World').should('be.visible')
	})
})
