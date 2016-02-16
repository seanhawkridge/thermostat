
function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = false;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};
Thermostat.prototype.down = function() {
  this.temperature -= 1;
};
