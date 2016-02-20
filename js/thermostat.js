
function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MAX_TEMP = 32;
  this.MIN_TEMP = 10;
  this.PS_MAX_TEMP = 25;
  this.powerSavingMode = "on";
  this.powerLevel = 'medium';
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.up = function() {
  if((this.powerSavingMode === "off" && this.temperature < this.MAX_TEMP)||(this.powerSavingMode === "on" && this.temperature < this.PS_MAX_TEMP)) {
    this.temperature += 1;
    this.powerLevelUpdate();
  } else {
    throw new Error('Max temperature reached');
  };
};

Thermostat.prototype.down = function() {
  if(this.temperature > this.MIN_TEMP){
    this.temperature -= 1;
    this.powerLevelUpdate();
  }
  else {
    throw new Error('Temp too low');
  };
};

Thermostat.prototype.powerSaveOn = function () {
    if (this.temperature > this.PS_MAX_TEMP) {
    this.temperature = this.PS_MAX_TEMP
    this.powerLevelUpdate();
    }
    this.powerSavingMode = "on";
};

Thermostat.prototype.powerSaveOff = function () {
    this.powerSavingMode = "off";
};


Thermostat.prototype.reset = function () {
    this.temperature = this.DEFAULT_TEMP;
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
