
const request = require('request')
const fs = require('fs')
const weatherUrl = require('./key.js')

// console.log(typeof(request))
// const requestData = JSON.stringify(request)

//fs.writeFileSync('/sample/reqeustData.txt', requestData)
//console.log(request)

const url = weatherUrl

/** with converting the incoming data to json without the npm library  
 * this code really cost me lot of time 
 * while converting the incoming data into object, I'm failing to parse it and not able to access the correct 
 * object. 
*/
/* request({ url: url }, (error, response) => {
    console.log(error)
    const responseData = JSON.stringify(response)
    fs.writeFileSync('./sample/reqeustData.json', responseData)
    // console.log(bodyData.current)
    //  data = JSON.parse(response)
    console.log(typeof (response))
    console.log(response.headers.date)
})
 */

/** with request npm library converting the object to json by setting up true */

request({ url: url, json: true }, (error, response) => {
    console.log(response.body)
    console.log(response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike)
})

