contentTemplate = $(".template");

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
    $("#overlay-owner").text(ownerName);
    var plantName = getPlant(plot.plant).name;
    $("#overlay-crop").text(plantName);
    // TODO: Display farm data
    console.log(ownerName);
    console.log(plantName);

    // Get and sort logs
    var logs = getPlotLogs(+plotID);
    logs.sort((a, b) => {
        return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });

    // Do stuff for each plot log
    logs.forEach(entry => {
        // TODO: Display log entry
        console.log("calling new snapshot with " + entry.date);
        var newCard = makeNewSnapshotTemplate(entry.date)
        newCard.show();
        console.log("attempting to append card...");
        console.log(newCard);
        addExistingFieldsToSnapshotCard(newCard, entry.data);
        $("#content").append(newCard);
        console.log(entry);
    });
});

function makeNewSnapshotTemplate(date) {
    var card = contentTemplate.clone();
    card.find(".snapshot-date").text("Date: " + new Date(date).toDateString());
    console.log("Returning card:");
    console.log(card);
    return card;
}

function addExistingFieldsToSnapshotCard(card, data){
    if (data.photos != null && data.photos.length > 0){
        var img = $("<img/>");
        img.attr("src", data.photos[0]);
        img.width(200);
        img.height(200);
        card.find(".snapshot-img").append(img);
    }
    if (data.seedsPlanted != null){
        var seedsPlanted = card.find(".snapshot-seeds");
        console.log("FOUND SEEDS PLANTED");
        console.log(seedsPlanted);
        seedsPlanted.find(".plantType").text(data.seedsPlanted.plantType.toString());
        seedsPlanted.find(".seedName").text(data.seedsPlanted.seedName.toString());
        seedsPlanted.find(".seedAmount").text(data.seedsPlanted.amount.toString());
        seedsPlanted.find(".seedAmountUnit").text(data.seedsPlanted.amountUnit.toString());
        seedsPlanted.find(".area").text(data.seedsPlanted.area.toString());
    }
    if (data.weather != null){
        var weather = card.find(".snapshot-weather");
        weather.find(".temperature").text(data.weather.temperature);
        weather.find(".rainfall").text(data.weather.rainfall);
        weather.find(".pressure").text(data.weather.pressure);
    }
}