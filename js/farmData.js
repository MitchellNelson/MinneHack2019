/*
 * farmData.js: Used to grab data from plots.json
 */

$(document).ready(function() {
    initFarmData();
    // TODO: Run through plots and add markers
});

var owners = null;
var plants = null;
var plots  = null;

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

    jQuery.ajaxSetup({async:true});
}

function getOwner(id) {

}