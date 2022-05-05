// function initMap() {
//   var options = {
//     zoom: 13,
//     center: { lat: 17.3534, lng: 78.4541 },
//   };
//   var map = new google.maps.Map(document.getElementById("map"), options);
// }
// navigator.geolocation.getCurrentPosition(function (position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   console.log(latitude, longitude);
// });
let url =
  "https://newsapi.org/v2/everything?" +
  "q=clothes&" +
  "from=2022-04-29&" +
  "sortBy=popularity&" +
  "apiKey=e851596fbddd4eeb8c50075d43ebf545";

let req = new Request(url);
const getNews = (async function () {
  // fetch(req).then(function (response) {
  //   // console.log(response.json());
  //   let jsondata = response.json();
  //   console.log(jsondata);
  //   const [{ articles: artcles }] = jsondata;
  //   console.log(artcles);
  // });
  const fetchdata = await fetch(req);
  const data = await fetchdata.json();
  console.log(data);
  const { articles: art } = data;
  // console.log(`the actual description  is ${art[0].content}`);
  // let image1 = document.getElementById("image");
  // image1.src = `${art[0].urlToImage}`;
  let mapdiv = document.getElementById("map");
  art.forEach(function (value, index) {
    // console.log(`the actual content for each  is ${value.content}`);
    console.log(`title is ${value.title}`);
    const html = ` 
    <div class="news-container">
    <div class="news-div">
      <img id="image" src="${value.urlToImage}" alt="image" >
      <h1 class="news-description news-title">${value.description}</h1>
      <p class="news">${value.content}</p>
      <a href="${value.url}">see more</a>
    </div>
    </div>`;
    mapdiv.insertAdjacentHTML("afterbegin", html);
  });
})();
