const data = require("../data/airports.json");

function dataHandler(request, response) {
  const search = new URLSearchParams(request.url.split("?")[1]);
  const searchedItem = search.get("name");

  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(autoComplete(searchedItem.toLowerCase())));
}

function autoComplete(search) {
  let newArr = data.filter((item) => {
    return (
      item["city"].toLowerCase().includes(search) ||
      item["country"].toLowerCase().includes(search) ||
      item["tz"].toLowerCase().includes(search) ||
      item["name"].toLowerCase().includes(search)
    );
  });
  return newArr;
}

module.exports = dataHandler;
