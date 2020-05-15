
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
                callback("SERVER ERROR",undefined);
            }else if(response.body.error){
                callback(response.body.error,undefined);
            }else{
                callback(undefined,response.body);
            }
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
                callback('SERVER ERROR',undefined);
            }else if(!response.body.features){
                callback({message:response.body.message},undefined);
            }
            else{
                const lat = response.body.features[0].center[1];
                const lon = response.body.features[0].center[0];
                callback(undefined,{
                    latitude:lat,
                    longitude: lon,
                    location: response.body.features[0].place_name,
                    features: response.body.features[0]
                });
            }
        })
    }else{
        callback('INVALID API KEY',undefined)
    }
}

module.exports = {
    GetWeather,
    GetGeoLocation,
};