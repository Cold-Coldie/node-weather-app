const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.pirateweather.net/forecast/3xmqmpQipsaE3ngCa8sBo1ftEPvWzLh28226vjNx/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.message) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ". It is currently " +
          body.currently.temperature +
          " degrees out. There is a " +
          body.currently.precipProbability +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
