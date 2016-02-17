
$(document).ready(function(){

  $('#select-city').submit(function(e) {
    e.preventDefault();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var city = $('#current-city').val();
    var id = '&APPID=e4513b76de988bd77bb49e09c03c1ca6';
    var units = '&units=metric';

    $.get(url + city + id + units, function(report) {
              console.log(report);
              $('span#current-temperature').text(report.main.temp);
              $('.cloud').text(report.weather[0].description);
              });
      });
});
