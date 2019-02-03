function getGetParam(name) {
    var url = new URL(window.location);
    return url.searchParams.get(name);
}

$(document).ready(() => {
    var plotID = getGetParam("p");
    initFarmData();

    var plot = getPlot(+plotID);

    if(plot === null) {
        console.error("Invalid plot ID: " + plotID);
        return;
    }

    var ownerName = getOwner(plot.owner).name;
    var plantName = getPlant(plot.plant).name;
    // TODO: Display farm data

    var logs = getPlotLogs(plotID);

    logs.forEach(entry => {
        // TODO: Display log entry
    });
});