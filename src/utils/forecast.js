const request = require('request')
//p
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3a2b18fb9dba1b5f4f775bbc035b93ac/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. Lowest temperature for today should be '+ body.daily.data[0].temperatureLow  +' and highest termperature would be '+ body.daily.data[0].temperatureHigh +'. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
