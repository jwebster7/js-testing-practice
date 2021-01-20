const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavoritecats.com"
];

const googleSearch = (searchInput, database) => {
  // filters out values from the db that only includes searchinput text
  const matches = database.filter((webSite) => {
    return webSite.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cats", googleDatabase));

module.exports = googleSearch;
