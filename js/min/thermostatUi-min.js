$(document).ready(function(){var e=new Thermostat;$bgcolour=function(){$("body").css("background-color",e.displayColour)},$bgcolour(),$("#temperature").text(e.temperature),$("#up").click(function(){e.up(),$("#temperature").text(e.temperature),$bgcolour()}),$("#down").click(function(){e.down(),$("#temperature").text(e.temperature),$bgcolour()}),$("#reset").click(function(){e.reset(),$("#temperature").text(e.temperature),$bgcolour()}),$("#pson").click(function(){e.powerSaveOn(),$("#ps-status").text(e.powerSavingMode)}),$("#psoff").click(function(){e.powerSaveOff(),$("#ps-status").text(e.powerSavingMode)})});