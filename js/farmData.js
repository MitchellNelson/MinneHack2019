/*
 * farmData.js: Used to grab data from plots.json
 */

$(document).ready(function() {
    initFarmData();
});

var owners = null;
var plants = null;
var plots  = null;

function initFarmData() {
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
}

function getOwner(id) {

}