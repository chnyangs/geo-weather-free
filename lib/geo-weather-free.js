const request = require('postman-request')

const weather = (message,callback)=>{
    callback({
        'goal':'publish npm package as test purpose',
        'message': message
    })
}

module.exports = weather;