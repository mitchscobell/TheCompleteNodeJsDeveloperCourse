const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=89eb09e08e37bc5fa7c3d9a715a36c5f&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    console.log(response.body)
})