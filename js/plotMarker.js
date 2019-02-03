
function makePlotMarker(position, mapId, title, id){
    var thisMarker = new google.maps.Marker({
        position: position,
        map: mapId,
        title: title,
        id: id,
    })

    thisMarker.addListener('click', onPlotMarkerClick);
    return this;
}

function onPlotMarkerClick(){
    console.log('onPlotMarkerClick id: ' + this.id);
    console.log(this);
    $("#overlay").show();

    plot = getPlot(this.id);

    //var plotInfo = getPlotInfo(this.id);
    //setOverlayInfoFromPlotInfo(plotInfo);
    var plotInfo = {
        id: this.id,
        crop: getPlant(plot.plant).name,
        owner: getOwner(plot.owner).name,
    }
    document.getElementById("overlay-crop").innerHTML = plotInfo.crop;
    document.getElementById("overlay-owner").innerHTML = plotInfo.owner;
}