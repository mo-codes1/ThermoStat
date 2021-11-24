var readlineSync = require('readline-sync');
const Thermostat = require('./thermostat');

const thermostat = new Thermostat();

while (true) {
  var command = readlineSync.question('Temperature is ' + thermostat.getTemperature() + ' Enter command > ');
  if (command === 'up') {
    thermostat.up()
    console.log('Temperature is ' + thermostat.getTemperature());
  }else if (command === 'down') {
    thermostat.down()
    console.log('Temperature is ' + thermostat.getTemperature());
  }
}

