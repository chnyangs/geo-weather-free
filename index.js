
const request = require('postman-request')
const validator = require('./util/validator')

const GetWeather = (data,callback)=>{
    const key = data.api_key;
    const coordinate = data.coordinate;
    if(validator.isCoordinate(coordinate) && validator.isWeatherApiKey(key)){
        const url = 'http://api.weatherstack.com/forecast?access_key=' + key + '&query='+ coordinate;
        request({
            url: url,
            json:true
        }, (error,response) =>{
            if(error){
                callback("WEATHER RETRIEVING ERROR");
            }
            callback(undefined,response.body);
        }) 
    }else{
       if(!validator.isCoordinate(coordinate)){
           callback('INVALID COORDINATE')
       }else{
           callback('INVALID API KEY')
       }
    }
}

const GetGeoLocation = (data,callback) =>{
    const address = data.address;
    const key = data.api_key;
    if(validator.isGeoApiKey(key)){
        const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=' + key + '&limit=1'
        request({
            url: geo_url,
            json:true
        }, (error,response) =>{
            if(error){
                console.log('service error');
            }else if(response.body.features.length===0){
                console.log('unable to find location.');
            }
            else{
                console.log(response.body)
                const lat = response.body.features[0].center[1];
                const lon = response.body.features[0].center[0];
                callback(undefined,{
                    latitude:lat,
                    longitude: lon,
                    location: response.body.features[0].place_name
                });
            }
        })
    }
}

module.exports = {
    GetWeather,
    GetGeoLocation,
};