/*
 * farmData.js: Used to grab data from plots.json
 */

$(document).ready(function() {
    initFarmData();
    // TODO: Run through plots and add markers
    for(var i = 1; i <= plots.length; i++) {
        console.log(i + ": " + getPlot(i));
    }
});

var owners   = null;
var plants   = null;
var plots    = null;
var datalogs = null;

function initFarmData() {
    jQuery.ajaxSetup({async:false});

    $.get('data/owners.json', function(data) {
        console.log(data);
        owners = data;
    }, "json");

    $.get('data/plants.json', function(data) {
        console.log(data);
        plants = data;
    }, "json");

    $.get('data/plots.json', function(data) {
        console.log(data);
        plots = data;
    }, "json");

    $.get('data/datalogs.json', function(data) {
        console.log(data);
        datalogs = data;
    }, "json");

    jQuery.ajaxSetup({async:true});
}

function getOwner(id) {
    for(i in owners) {
        if(owners[i].id === id) {
            return owners[i];
        }
    }
    return null;
}

function getPlot(id) {
    for(i in plots) {
        if(plots[i].id === id) {
            return plots[i];
        }
    }
    return null;
}