function Thermostat(){this.temperature=20,this.powerSavingMode="on",this.displayColour="yellow",_MINTEMP=10}Thermostat.prototype.up=function(){if(!("off"===this.powerSavingMode&&this.temperature<32||"on"===this.powerSavingMode&&this.temperature<25))throw new Error("Max temperature reached")},Thermostat.prototype.down=function(){if(!(this.temperature>_MINTEMP))throw new Error("Temp too low");this.temperature-=1,this.isColour()},Thermostat.prototype.powerSaveOn=function(){this.powerSavingMode="on"},Thermostat.prototype.powerSaveOff=function(){this.powerSavingMode="off"},Thermostat.prototype.reset=function(){this.temperature=20,this.isColour()},Thermostat.prototype.isColour=function(){this.temperature<18?this.displayColour="green":this.temperature>=18&&this.temperature<25?this.displayColour="yellow":this.displayColour="red"};