const got = require('got');
const apiKey = 'f7416d2b9903e75920ce0b01efac50a5';

const handleResult = (result) => {
   console.log(result);
}

class WeatherApi {

  fetchWeatherData(city, callback) {
    let weatherData = null;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    got(apiUrl).then((response) => {
      callback(JSON.parse(response.body).main.temp);
    });
  };
};

let weather = new WeatherApi;
weather.fetchWeatherData('London', handleResult)