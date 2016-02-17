$(document).ready(function() {

  var thermoMonkey = new Thermostat


  $bgcolour = function() {

    if (thermoMonkey.powerLevel == 'high') {
      colour = 'red';
    } else if (thermoMonkey.powerLevel == 'low') {
      colour = 'green';
    } else {
      colour = 'yellow';
    }

    $("#thermostat-display").css({
      borderColor : colour,
      WebkitTransition : 'border-color 1s ease',
      MozTransition    : 'border-color 1s ease',
      MsTransition     : 'border-color 1s ease',
      OTransition      : 'border-color 1s ease',
      transition       : 'border-color 1s ease'
    });
    $("#thermostat-container h1#temperature").css({
      color : colour,
      WebkitTransition : 'color 1s ease',
      MozTransition    : 'color 1s ease',
      MsTransition     : 'color 1s ease',
      OTransition      : 'color 1s ease',
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

  // $("#pson").click(function() {
  //   thermoMonkey.powerSaveOn()
  //   $("#ps-status").text(thermoMonkey.powerSavingMode)
  // });
  //
  // $("#psoff").click(function() {
  //   thermoMonkey.powerSaveOff()
  //   $("#ps-status").text(thermoMonkey.powerSavingMode)
  // });

  thermoMonkey.powerSaveOn();

  function on() {
      thermoMonkey.powerSaveOn();
      $animateText();
      $("#ps-status").text(thermoMonkey.powerSavingMode);
      $(this).css({
        color : 'green',
        WebkitTransition : 'color 500ms ease',
        MozTransition    : 'color 500ms ease',
        MsTransition     : 'color 500ms ease',
        OTransition      : 'color 500ms ease',
        transition       : 'color 500ms ease'
      })
      $(this).one("click", off);
  }

  function off() {
      thermoMonkey.powerSaveOff()
      $("#ps-status").text(thermoMonkey.powerSavingMode);
      $(this).css({
        color : 'red',
        WebkitTransition : 'color 500ms ease',
        MozTransition    : 'color 500ms ease',
        MsTransition     : 'color 500ms ease',
        OTransition      : 'color 500ms ease',
        transition       : 'color 500ms ease'
      })
      $(this).one("click", on);
  }

  $("#thermostat-container button#powersave.control").one("click", off);





  // $( "#powersave" ).toggle(function() {
  //   thermoMonkey.powerSaveOn()
  //   $("#ps-status").text(thermoMonkey.powerSavingMode)
  // }, function() {
  //   thermoMonkey.powerSaveOff()
  //   $("#ps-status").text(thermoMonkey.powerSavingMode)
  // });

});
