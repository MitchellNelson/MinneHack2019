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
    var plantName = getPlant(plot.plant).name;
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
    var cardDate = card.find(".snapshot-date");
    var dateField = $("<span/>");
    dateField.text("Date: " + date);
    cardDate.append(dateField);
    card.append(cardDate);
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
        var seedsPlanted = $("<div/>");
        seedsPlanted.text(JSON.stringify(data.seedsPlanted));
        card.find(".snapshot-seeds").append(seedsPlanted);
    }
    if (data.weather != null){
        var weather = $("<div/>");
        weather.text(JSON.stringify(data.weather));
        card.find(".snapshot-weather").append(weather);
    }
}