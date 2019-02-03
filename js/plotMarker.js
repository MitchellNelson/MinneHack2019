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

  plot = getPlot(this.id);
  var plotInfo = getPlotInfo(plot);
  setOverlayFields(plotInfo);

  // Get all plot logs associated with this plot.
  var plotLogs = getPlotLogs(plot.id);
  // Sort the logs from newest to oldest
  plotLogs.sort((a, b) => {
    aDate = new Date(a.date);
    bDate = new Date(b.date);
    return aDate > bDate ? -1 : 1;
  });
  console.log("plot logs sorted");
  console.log(plotLogs);

  $("#overlay").show();
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
