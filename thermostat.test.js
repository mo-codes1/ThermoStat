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
});