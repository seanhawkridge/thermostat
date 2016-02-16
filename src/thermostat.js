
function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.displayColour = 'yellow';
};

Thermostat.prototype.up = function() {
  if((this.powerSavingMode === false && this.temperature < 32)||(this.powerSavingMode === true && this.temperature < 25)) {
    this.temperature += 1;
    this.isColour();
  } else {
    throw new Error('Max temperature reached');
  };
};

Thermostat.prototype.down = function() {
  if(this.temperature > 10){
    this.temperature -= 1;
    this.isColour();
  }
  else {
    throw new Error('Temp too low');
  };
};

Thermostat.prototype.powerSaveOn = function () {
    this.powerSavingMode = true;
};

Thermostat.prototype.powerSaveOff = function () {
    this.powerSavingMode = false;
};


Thermostat.prototype.reset = function () {
    this.temperature = 20
    this.isColour();
};

Thermostat.prototype.isColour = function() {
  if (this.temperature < 18) {
    this.displayColour = 'green';
  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.displayColour = 'yellow';
  } else {
    this.displayColour = 'red';
  };
};
