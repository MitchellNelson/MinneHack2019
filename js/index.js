var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.814, lng: -94.95883 },
    zoom: 12
  });
  var testLocation = { lat: 44.814, lng: -94.95883 };
  var marker = new google.maps.Marker({ position: testLocation, map: map });
}
