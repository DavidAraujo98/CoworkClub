Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

describe("visit website", () => {
    it("visit", () => {
        cy.visit("localhost:3000");
    });

    it("search", () => {
        cy.get("#search")
            .type("Aveiro", { force: true })
            .should("have.value", "Aveiro");
        cy.get("#searchbtn").click({ force: true });
    });

    it("filter results", () => {
        cy.get("#minprice").type(25, { force: true });
        cy.get(".space-card-container4 > #price").should(($lis) => {
            for (var i = 0; i < $lis.length; i++) {
                cy.get($lis.eq(i)).then(($text) => {
                    const p = Number($text.text());
                    console.log(p);
                    expect(p >= 25).to.be.true;
                });
            }
        });
    });

    it("visit sapce", () => {
        cy.get("#AveiroHub").click();
    });
});
