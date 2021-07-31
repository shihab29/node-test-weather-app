const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2hpaGFiMjkiLCJhIjoiY2sxZjYzaGtwMHE5NjNjcDZoYTU3bzlnYyJ9.4i9BmN4WDhjj7UqfpGgB9w&limit=1`;

  request({ url, json: true }, (error, response) => {
    const { features } = response.body;
    if (error) {
      callback("Unable to connect with geolocation service!", undefined);
    } else if (features.length === 0) {
      callback("Unable to find location!", undefined);
    } else {
      const { center, place_name: location } = features[0];
      const [longitude, latitude] = center;
      callback(undefined, { longitude, latitude, location });
    }
  });
};

module.exports = geocode;
