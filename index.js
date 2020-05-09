const geo_weather = require('./lib/geo-weather-free')

GoodAttempt = (message)=>{
    geo_weather(message,(data) =>{
        console.log(data);
    })
}
GoodAttempt('Successfully!');
module.exports = GoodAttempt;