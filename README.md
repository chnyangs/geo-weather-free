# geo-weather-free

Based on the free API WeatherStack and MapBox

# Update History
[V1.0.3](#V1.0.3 Updates)

# Features

* Get coordinate by address.
* Get weather information by coordinate.

# Update History

[1.0.3](#V1.0.3)

# Install
<code>$ npm i geo-weather-free</code>

# Get API key
[WeatherStack](https://weatherstack.com/)

[MapBox](https://account.mapbox.com/access-tokens/)

# Useage
<pre>
const weather = require('geo-weather-free')
const address = "Monash University"
const data = {address:'your address',api_key:'your mapbox api key'}
weather.GetGeoLocation(data, (error,data)=> { 
    console.log(data.latitude)
    console.log(data.longitude)
    console.log(data.location)
})


weather.GetWeather({coordinate:'your coordinate' api_key:'your weather api key'}, (error,data)=> {
    console.log(data.location)
    console.log(data.current)
    console.log(data.forecast)
})
</pre>

# Data example

<pre>
## GetGeoLocation
{
  latitude: -37.91063,
  longitude: 145.13360699999998,
  location: 'Monash University Clayton Campus, Wellington Rd, Melbourne, Victoria 3168, Australia'
}

## GetWeather
{
  request: {
    type: 'LatLon',
    query: 'Lat -37.23 and Lon 144.23',
    language: 'en',
    unit: 'm'
  },
  location: {
    name: 'Denver',
    country: 'Australia',
    region: 'Victoria',
    lat: '-37.267',
    lon: '144.300',
    timezone_id: 'Australia/Melbourne',
    localtime: '2020-05-12 20:57',
    localtime_epoch: 1589317020,
    utc_offset: '10.0'
  },
  current: {
    observation_time: '10:57 AM',
    temperature: 11,
    weather_code: 113,
    weather_icons: [
      'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'
    ],
    weather_descriptions: [ 'Clear' ],
    wind_speed: 20,
    wind_degree: 10,
    wind_dir: 'N',
    pressure: 1021,
    precip: 0,
    humidity: 76,
    cloudcover: 0,
    feelslike: 9,
    uv_index: 1,
    visibility: 10,
    is_day: 'no'
  },
  forecast: {
    '2020-05-11': {
      date: '2020-05-11',
      date_epoch: 1589155200,
      astro: [Object],
      mintemp: 4,
      maxtemp: 12,
      avgtemp: 8,
      totalsnow: 0,
      sunhour: 8.7,
      uv_index: 11
    }
  }
}
</pre>

# V1.0.3
* 1. Return value for <code>GetGeoLocation</code> with <code>features</code> json object.
<pre>
{
  latitude: -37.91063,
  longitude: 145.13360699999998,
  location: 'Monash University Clayton Campus, Wellington Rd, Melbourne, Victoria 3168, Australia',
  features: {
    id: 'poi.438086709409',
    type: 'Feature',
    place_type: [ 'poi' ],
    relevance: 1,
    properties: {
      landmark: true,
      wikidata: 'Q6898241',
      address: 'Wellington Rd',
      category: 'college, university',
      maki: 'college'
    },
    text: 'Monash University Clayton Campus',
    place_name: 'Monash University Clayton Campus, Wellington Rd, Melbourne, Victoria 3168, Australia',
    center: [ 145.13360699999998, -37.91063 ],
    geometry: { coordinates: [Array], type: 'Point' },
    context: [ [Object], [Object], [Object], [Object], [Object] ]
  }
}
</pre>

* 2. Update Error message.
