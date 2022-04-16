const input = document.querySelector("input");
let StorageArray = ["item1", "item2", "item3"];
let inputSection = document.querySelector(".input-section");
// try {
//   let getLocalItem = localStorage.getItem(StorageArray[0]);
//   inputSection.insertAdjacentHTML("beforeend", getLocalItem);
// } catch (e) {
//   console.log(e);
// }
localStorage.clear();
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// MAP SECTION
let map;
navigator.geolocation.getCurrentPosition(function (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let cordsArr = [latitude, longitude];
  map = L.map("map").setView(cordsArr, 15);
  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  // /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  map.on(
    "click",
    function (mapEvent) {
      const { lat, lng } = mapEvent.latlng;
      if (input.value == "") return;
      const p = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 1000,
            minWidth: 40,
            closeOnClick: false,
            autoClose: false,
            className: "popup",
            raiseOnHover: true,
          })
        )
        .setPopupContent(input.value)
        .openPopup();
      // ///////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////
      // SECTION -DATA MANIPULATION
      if (input.value == "") return;
      else {
        buildHtml(p.getLatLng());
        viewtoPopup(p.getLatLng());
      }
    },
    function () {
      alert("didn't getting your location");
    }
  );
  const buildHtml = function (args1) {
    const date = new Date();
    let options = { weekday: "long" };
    let formatted = new Intl.DateTimeFormat("en-US", options).format(date);
    const html1 = `
    <div class="content" data="3304">
    <div class="add-info">
    <p>${formatted}</p>
    <p>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
    </div>
    <div class="main-content">
    <p>
    ${input.value}
    </p>
    </div>
    </div>`;
    let inputSection = document.querySelector(".input-section");
    inputSection.insertAdjacentHTML("beforeend", html1);
    input.value = "";
    console.log(`the popup latitude an is ${args1}`);
    // viewtoPopup(args1);
    // map.getPopup();
  };
});
const viewtoPopup = function (latlng) {
  map.setView(latlng, 15, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
};
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
// fetch("https://fakestoreapi.com/carts")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
// fetch("https://fakestoreapi.com/auth/login", {
//   method: "POST",
//   body: JSON.stringify({
//     username: "mor_2314",
//     password: "83r5^_",
//   }),
// })

//   .then((res) => res.json())
//   .then((json) => console.log(json));
//////
// let content = document.querySelector(".  content");
// console.log(StorageArray);
// content.addEventListener("click", function () {
//   console.log(p.getLatLng());
//   map.setView(p.getLatLng(), 15, {
//     animate: true,
//     pan: {
//       duration: 3,
//     },
//   });
// });
// localStorage.setItem(StorageArray[0], html1);
// localStorage.key(1);
// lng78.4481728787319
// lat17.360878738389573
// lat: 17.34793482496458, lng: 78.45579450327709
// console.log(distance(<17.360878738389573 ,78.4481728787319> )
//
