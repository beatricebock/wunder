var url =
  "http://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=d02f619cf302402ea12c43f90bbc2139";
var req = new Request(url);
fetch(req).then(function (response) {
  console.log(response.json());
});
