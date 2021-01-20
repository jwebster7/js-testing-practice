const fetch = require("node-fetch");
const swapi = require("./script-two");

it("calls swapi to get people", () => {
  // when running asynchronous tests, always do this.
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });
});

it("calls swapi to get people using a promise", (done) => {
  expect.assertions(2);
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});

// the function by mocking out the api fetch
it("calls getPeople and returns count and results", () => {
  // mock out fetch call
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 6, 7, 8, 5]
        })
    })
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
