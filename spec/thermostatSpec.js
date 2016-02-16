
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

});
