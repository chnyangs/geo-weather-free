exports.isCoordinate = (coordinate) => {
    const geo = coordinate.split(',');
    if ((parseFloat(geo[0]) > 90) || (parseFloat(geo[0]) < -90)){
        return false
    }
    if ((parseFloat(geo[1]) > 180) || (parseFloat(geo[1]) < 0)){
        return false
    }
    return true;
}

exports.isWeatherApiKey = (api_key) => {
    return (api_key.indexOf('bf') == 0)
}

exports.isGeoApiKey = (api_key) => {
    return ((api_key.indexOf('pk.') == 0) && (api_key.split('.').length == 3))
}