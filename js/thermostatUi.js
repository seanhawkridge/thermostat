$(document).ready(function() {

  var thermoMonkey = new Thermostat


  $bgcolour = function() {

    if (thermoMonkey.powerLevel == 'high') {
      colour = '#CC333F';
    } else if (thermoMonkey.powerLevel == 'low') {
      colour = '#30C4C9';
    } else {
      colour = '#EDC951';
    }

    $("#thermostat-display").css({
      borderColor : colour,
      transition       : 'border-color 1s ease'
    });
    $("#thermostat-container h1#temperature").css({
      color : colour,
      transition       : 'color 1s ease'
    });

  };

  $animateText = function() {
    $("#temperature").animate({
      opacity : 0
    }, 150, function() {
      $("#temperature").text(thermoMonkey.temperature)
    });

    $("#temperature").animate({
      opacity : 1
    }, 150);

  }

  $bgcolour();

  $animateText();

  $("#up").click(function() {
    thermoMonkey.up()
    $animateText();
    $bgcolour();
  });

  $("#down").click(function() {
    thermoMonkey.down()
    $animateText();
    $bgcolour();
  });

  $("#reset").click(function() {
    thermoMonkey.reset()
    $animateText();
    $bgcolour();
  });


  thermoMonkey.powerSaveOn();

  function on() {
      thermoMonkey.powerSaveOn();
      $animateText();
      $("#ps-status").stop( true, true ).text(thermoMonkey.powerSavingMode);
      $(this).css({
        color : '#30C4C9',
        transition       : 'color 500ms ease'
      })
      $(this).one("click", off);
  }

  function off() {
      thermoMonkey.powerSaveOff()
      $("#ps-status").stop( true, true ).text(thermoMonkey.powerSavingMode);
      $(this).css({
        color : '#CC333F',
        transition       : 'color 500ms ease'
      })
      $(this).one("click", on);
  }

  $("#thermostat-container button#powersave.control").one("click", off);

});
