class Thermostat {
  constructor() {
    this.default = 20;
    this.temp = this.default;
    this.powerSaving = true;
    this.maxtemp = 25;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    if(this.temp < this.maxtemp) {
      this.temp++;
    }else {
      
    }
    
  }

  down() {
    if(this.temp > 10) {
      this.temp--;
    }
  }

  setMaxTemp() {
    if (this.powerSaving) {
      this.maxtemp = 25;
    }else{
      this.maxtemp = 32;
    }
  }
  
  setPowerSavingMode(boolean) {
    this.powerSaving = boolean;
    return this.setMaxTemp();
  }

  reset() {
    this.temp = this.default
  }

  energyUsage() {
    if(this.temp < 18) {
      return "You are on low usage"
    }else if(this.temp <= 25) {
      return "You are on medium usage"
    }else {
      return "You are on high usage"
    }
  }

}
  


module.exports = Thermostat