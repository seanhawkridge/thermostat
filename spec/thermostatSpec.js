
describe("Thermostat", function() {

  beforeEach(function(){
    thermo = new Thermostat;
  });

  it("should initialize at 20 degrees", function(){
    expect(thermo.temperature).toEqual(20);
  });

  it("should initialize with powersaving on", function(){
    expect(thermo.powerSavingMode).toBe("on");
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
    expect(thermo.powerSavingMode).toBe("on");
  });

  it("Should change value of powersaving mode", function(){
    thermo.powerSaveOff()
    expect(thermo.powerSavingMode).toBe("off");
  });

  it("Should raise error at 33 temp if powersave off", function(){
    thermo.powerSaveOff()
    thermo.temperature = 32;
    expect(function () {thermo.up();}).toThrow(new Error ('Max temperature reached'));
  });

  it("Should raise error at 26 temp if powersave on",function(){
    thermo.temperature = 25;
    expect(function () {thermo.up();}).toThrow(new Error ('Max temperature reached'));
  });

  it("Should return to 20 degrees when reset is pushed", function(){
    thermo.temperature = 30;
    thermo.reset();
    expect(thermo.temperature).toEqual(20);
  });

  it("Should change the display colour to green below 18 degrees", function() {
    thermo.temperature = 17;
    thermo.isColour()
    expect(thermo.displayColour).toBe('green')
  });

  it("Should change the display colour to yellow between 18 - 24 degrees", function() {
    thermo.temperature = 23;
    thermo.isColour()
    expect(thermo.displayColour).toBe('yellow');
  });

  it("Should change the display colour to red above 25 degrees", function() {
    thermo.powerSaveOff();
    thermo.temperature = 28;
    thermo.isColour()
    expect(thermo.displayColour).toBe('red');
  });

});
