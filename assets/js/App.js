var url =
  //"https://cors-anywhere.herokuapp.com/" +
  "http://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=d02f619cf302402ea12c43f90bbc2139";

let newsLink = document.getElementById("api-link");
let newsImage = document.getElementById("api-image");

document.getElementById("api-headline").innerText = "loading...";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    let apiNews = data.articles[0];

    document.getElementById("api-headline").innerText = apiNews.title;
    document.getElementById("api-content").innerText = apiNews.description;

    newsLink.setAttribute("href", apiNews.url);
    newsImage.setAttribute("src", apiNews.urlToImage);
    console.log(apiNews.title + apiNews.description);
  })
  .catch((err) => {
    // Do something for an error here
    console.log("error with API");
  });
