const googleSearch = require("./script");

const mockDatabase = [
  "dog.com",
  "cheesepuff.com",
  "disney.com",
  "google.com",
  "dogpictures.com"
];

describe("googleSearch", () => {
  it("is a silly test", () => {
    expect("hello").toBe("hello");
  });

  it("is searching google", () => {
    expect(googleSearch("dog", mockDatabase)).toEqual([
      "dog.com",
      "dogpictures.com"
    ]);
  });

  it("returns empty [] with undefined input", () => {
    expect(googleSearch(undefined, mockDatabase)).toEqual([]);
  });

  it("returns empty [] with null input", () => {
    expect(googleSearch(null, mockDatabase)).toEqual([]);
  });

  it("only returns at most 3 matches", () => {
    expect(googleSearch(".com", mockDatabase).length).toEqual(3);
  });
});
