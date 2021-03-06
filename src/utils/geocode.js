const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY2FsdmFyeTAxIiwiYSI6ImNsMGc0eXZnODB6YnYzYnBzODV5MmJ5YnIifQ.Le4tRtE8O9TOZO2JlVP0YA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the location service.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].geometry.coordinates[0],
        latitude: body.features[0].geometry.coordinates[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
