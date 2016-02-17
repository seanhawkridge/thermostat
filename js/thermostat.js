
function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = "on";
  this.powerLevel = 'medium';
};

Thermostat.prototype.up = function() {
  if((this.powerSavingMode === "off" && this.temperature < 32)||(this.powerSavingMode === "on" && this.temperature < 25)) {
    this.temperature += 1;
    this.powerLevelUpdate();
  } else {
    throw new Error('Max temperature reached');
  };
};

Thermostat.prototype.down = function() {
  if(this.temperature > 10){
    this.temperature -= 1;
    this.powerLevelUpdate();
  }
  else {
    throw new Error('Temp too low');
  };
};

Thermostat.prototype.powerSaveOn = function () {
    if (this.temperature > 25) {
    this.temperature = 25;
    this.powerLevelUpdate();
    }
    this.powerSavingMode = "on";
};

Thermostat.prototype.powerSaveOff = function () {
    this.powerSavingMode = "off";
};


Thermostat.prototype.reset = function () {
    this.temperature = 20
    this.powerLevelUpdate();
};

Thermostat.prototype.powerLevelUpdate = function() {
  if (this.temperature < 18) {
    this.powerLevel = 'low';
  } else if (this.temperature >= 18 && this.temperature < 25) {
    this.powerLevel = 'medium';
  } else {
    this.powerLevel = 'high';
  };
};
