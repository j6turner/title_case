describe("titleCase", function() {

  it("capitalizes the first letter of a word and downcases the rest", function() {
    expect(titleCase("caT")).to.equal("Cat");
  });

  it("capitalizes the first letter of each word and downcases the rest", function () {
    expect(titleCase("caT i loVe")).to.equal("Cat I Love");
  });

  it("does not capitalize conjunctions, articles, or prepositions after the first word", function () {
    expect(titleCase("caT AND moUse that i loVe")).to.equal("Cat and Mouse That I Love")
  });

});
