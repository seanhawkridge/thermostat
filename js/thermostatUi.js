$(document).ready(function() {

  var thermoMonkey = new Thermostat


  $bgcolour = function() {
    $("body").css('background-color', thermoMonkey.displayColour)
  };

  $bgcolour();

  $("#temperature").text(thermoMonkey.temperature)

  $("#up").click(function() {
    thermoMonkey.up()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#down").click(function() {
    thermoMonkey.down()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#reset").click(function() {
    thermoMonkey.reset()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#pson").click(function() {
    thermoMonkey.powerSaveOn()
    $("#ps-status").text(thermoMonkey.powerSavingMode)
  });

  $("#psoff").click(function() {
    thermoMonkey.powerSaveOff()
    $("#ps-status").text(thermoMonkey.powerSavingMode)
  });

});
