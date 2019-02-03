var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.814, lng: -94.95883 },
    zoom: 12
  });
  var testLocation = { lat: 44.814, lng: -94.95883 };
  var marker = makePlotMarker(testLocation, map, "my marker", 1000);

  placePlotMarkers();
}

function hideOverlay() {
    console.log("hideOverlay()");
    $('#overlay').hide();
}