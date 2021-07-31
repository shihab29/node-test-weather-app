const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2618c0217526a460029e9255afaccc28&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect with weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const { temperature, feelslike } = response.body.current;
      callback(undefined, { temperature, feelslike });
    }
  });
};

module.exports = forecast;
