it("simple user flow searching for a character", () => {
  cy.visit("/");
  cy.findByRole("heading", { name: "Konoha" }).should("exist");

  cy.findByText("Search for an Anime or a Manga character.").should("exist");

  cy.findByLabelText("Search").type("Naruto Uzumaki");

  cy.findByRole("button", { name: "Search" }).click();

  cy.findByRole("img", { name: "Naruto Uzumaki" }).should("exist");

  cy.findByText("Birth: 10/10").should("exist");

  cy.findByText("10161 people loving Naruto Uzumaki on AniList.").should(
    "exist"
  );
});
