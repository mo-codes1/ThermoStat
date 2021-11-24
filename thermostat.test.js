const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();
  it('returns the default temp', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('increases temp by 1', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21);
  });
  it('decreases temp by 1', () => {
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('sets a power saving mode to true or false', () => {
    thermostat.setPowerSavingMode(true)
    expect(thermostat.setMaxTemp()).toBe(25);
  });
  it('sets the temp back to default', () => {
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  });  



  
});