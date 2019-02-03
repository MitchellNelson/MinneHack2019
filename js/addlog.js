$(document).ready(() => {
  $("#add_data_button").on("click", () => {
    console.info("---");
    var addition = $("#add_data_select").val();
    $("#data-items").append($("#" + addition).clone());
  });
});