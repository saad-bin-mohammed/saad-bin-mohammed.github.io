function initMap() {
  var options = {
    zoom: 13,
    center: { lat: 17.3534, lng: 78.4541 },
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
}
// navigator.geolocation.getCurrentPosition(function (position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   console.log(latitude, longitude);
// });
