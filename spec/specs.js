describe("titleCase", function() {

  it("capitalizes the first letter of a word and downcases the rest", function() {
    expect(titleCase("caT")).to.equal("Cat");
  });

  it("capitalizes the first letter of each word and downcases the rest", function () {
    expect(titleCase("caT i loVe")).to.equal("Cat I Love");
  });

});
