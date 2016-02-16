
describe("Thermostat", function() {

  beforeEach(function(){
    thermo = new Thermostat;
  });

  it("should initialize at 20 degrees", function(){
    expect(thermo.temperature).toEqual(20);
  });

  it("should initialize with powersaving off", function(){
    expect(thermo.powerSavingMode).toBe(false);
  });

  it("should raise the temperature with the up button", function(){
    thermo.up()
    expect(thermo.temperature).toEqual(21)
  });

  it("should lower the temperature with the down button", function(){
    thermo.down()
    expect(thermo.temperature).toEqual(19)
  });

  it("Should throw an error if .down is called at 10 degrees.", function(){
    thermo.temperature = 10;
    expect(function () {thermo.down();}).toThrow(new Error ('Temp too low'));
  });

  it("Should change value of powersaving mode", function(){
    thermo.powerSaveOn()
    expect(thermo.powerSavingMode).toBe(true);
  });

  it("Should change value of powersaving mode", function(){
    thermo.powerSaveOff()
    expect(thermo.powerSavingMode).toBe(false);
  });

  it("Should raise error at 33 temp if powersave off", function(){
    thermo.temperature = 32;
    expect(function () {thermo.up();}).toThrow(new Error ('Max temperature reached'));
  });

  it("Should raise error at 26 temp if powersave on",function(){
    thermo.powerSaveOn()
    thermo.temperature = 25;
    expect(function () {thermo.up();}).toThrow(new Error ('Max temperature reached'));
  });

});
