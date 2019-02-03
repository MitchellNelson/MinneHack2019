$(document).ready(() => {
  $("#add_data_button").on("click", () => {
    console.info("---");
    var addition = $("#add_data_select").val();
    $("#data-items").append($("#" + addition).clone());
  });

  getWeatherData();
});

function kelvinToFarenheit(k) {
  return (k - 273.15)* 1.8000 + 32.0;
}

function hpaToInHg(hpa) {
  return hpa * 0.02953;
}

function mmToIn(mm) {
  return mm / 25.4;
}

function getWeatherData() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Olivia,us&APPID=4edb00179154460215c0b07faf881825";

  $.get(
    url,
    function(data) {
      console.info(data);
      var temp = kelvinToFarenheit(data.main.temp);
      var pressure = hpaToInHg(data.main.pressure);
      var rainfall = 0; //mmToIn(data.rain["3h"]);

      console.info(temp);
      console.info(pressure);
      console.info(rainfall);

      temp     = Math.round(temp * 10.0) / 10.0;
      pressure = Math.round(pressure * 10.0) / 10.0;
      rainfall = Math.round(rainfall * 20.0) / 20.0;

      $(".template-weather-temp").val(temp);
      $(".template-weather-pressure").val(pressure);
      $(".template-weather-rain").val(rainfall);
    },
    "json"
  );
}