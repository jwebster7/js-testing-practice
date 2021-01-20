// in node, there is no window.fetch()
const fetch = require("node-fetch");

// using promises
const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

// using async await
const getPeople = async (fetch) => {
  const getReq = await fetch("https://swapi.dev/api/people");
  const data = await getReq.json();
  return {
    count: data.count,
    results: data.results
  };
};

module.exports = {
  getPeople,
  getPeoplePromise
};
