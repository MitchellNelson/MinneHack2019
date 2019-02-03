var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.8, lng: -94.99 },
    zoom: 14,
    mapTypeId: 'satellite'  
  });

  initFarmData();
  placePlotMarkers();
}

function hideOverlay() {
    console.log("hideOverlay()");
    $('#overlay').hide();
}