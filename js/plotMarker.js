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

function onPlotMarkerClick(){
    console.log('onPlotMarkerClick id: ' + this.id);
    console.log(this);

    plot = getPlot(this.id);
    var plotInfo = getPlotInfo(plot);

    // Sort the logs from newest to oldest
    plotInfo.data.sort((a,b) => {
        aDate = new Date(a.date);
        bDate = new Date(b.date);
        return aDate > bDate ? -1 : 1;
    });

    setOverlayFields(plotInfo);

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
  
  for(var i = 0; i < plotInfo.data.length; i++) {
    if("photos" in plotInfo.data[i].data) {
      document.getElementById("overlay-image").src = plotInfo.data[i].data.photos[0];
      break;
    }
  }
}
