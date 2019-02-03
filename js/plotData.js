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

    var seedsPlanted = getSeedDataFromLogs(logs);
    console.log("seeds:");
    console.log(seedsPlanted);
    if (seedsPlanted != null){
        addSeedDataToContent(seedsPlanted);
    }

    // Do stuff for each plot log
    logs.forEach(entry => {
        // TODO: Display log entry
        console.log("calling new snapshot with " + entry.date);
        console.log(entry);
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
    var metadata = card.find(".snapshot-meta");
    metadata.find(".date").text("Date: " + new Date(date).toDateString());
    console.log("Returning card:");
    console.log(card);
    return card;
}

function addExistingFieldsToSnapshotCard(card, data){
    if (data.photos != null && data.photos.length > 0){
        var imgDiv = card.find(".snapshot-img");
        var img = $("<img/>");
        img.attr("src", data.photos[0]);
        imgDiv.append(img);
    }
    
    if (data.weather != null){
        var weather = card.find(".snapshot-weather");
        weather.find(".temperature").text(data.weather.temperature.toString());
        weather.find(".rainfall").text(data.weather.rain.toString());
        weather.find(".pressure").text(data.weather.pressure.toString());
    }
}

function getSeedDataFromLogs(logs){
    var log;
    for (var i = 0; i < logs.length; i++){
        log = logs[i].data;
        if (log.seedsPlanted != null){
            return log.seedsPlanted;
        }
    }
    return null;
}

function addSeedDataToContent(seedsPlanted){
    var seedsDiv = $("#seeds");
    console.log("Tried to find seedsDiv:")
    console.log(seedsDiv);
    seedsDiv.find(".seedName").text(seedsPlanted.seedName.toString());
    seedsDiv.find(".seedAmount").text(seedsPlanted.amount.toString()
                                            + seedsPlanted.amountUnit.toString());
    seedsDiv.find(".area").text(seedsPlanted.area.toString());
}