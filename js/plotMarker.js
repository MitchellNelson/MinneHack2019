function makePlotMarker(position, mapId, title, id) {
  var thisMarker = new google.maps.Marker({
    position: position,
    map: mapId,
    title: title,
    id: id
  });

  thisMarker.addListener("click", onPlotMarkerClick);
  return this;
}

function onPlotMarkerClick() {
  console.log("onPlotMarkerClick id: " + this.id);
  console.log(this);
  $("#overlay").show();

  plot = getPlot(this.id);

  var plotInfo = getPlotInfo(plot);
  setOverlayFields(plotInfo);
}

function getPlotInfo(plot) {
  var plotInfo = {
    id: plot.id,
    crop: getPlant(plot.plant).name,
    owner: getOwner(plot.owner).name,
    data: getPlotLogs(plot.id)
  };
  return plotInfo;
}

function setOverlayFields(plotInfo) {
  document.getElementById("overlay-crop").innerHTML = plotInfo.crop;
  document.getElementById("overlay-owner").innerHTML = plotInfo.owner;
  //console.log(plotInfo.data);
  console.log(plotInfo.data[plotInfo.data.length - 1].data.photos[0]);
  document.getElementById("overlay-image").src =
    plotInfo.data[plotInfo.data.length - 1].data.photos[0];
  //imageDiv.appendChild(plotInfo.data[plotInfo.data.length - 1].data.photos[0]);
}
