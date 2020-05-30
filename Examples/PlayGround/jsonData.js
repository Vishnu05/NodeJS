const fs = require('fs')

const data = {
    os: "windows 10",
    model: "hp",
    ram: "8 gb"
}

/** Json Stringfy will convert the object into plain string */
const jsonString = JSON.stringify(data, data)
console.log(jsonString)

/** Conver the json string into Object */
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject)

/** It will create a new file and write the value of data */
fs.writeFileSync('jsonData.json', jsonString)

const dataBuffer = fs.readFileSync('jsonData.json')
/** This data will give the buffer and binary value */
console.log(dataBuffer)
/** to convert that calling toString() method will give the original value */
console.log(dataBuffer.toString())

/** The value has been string now and again it is converting into json object */
const value = JSON.parse(dataBuffer)
console.log(value.ram)

/** Chaning the value of json data */

value.ram = "16 gb"
value.os = "windows 10 professional edition"
value.model = "Hp with new featues"

/** This code fails because the data should be passed in a filesystem is String and I'm passing a object*/
//fs.writeFileSync('jsonData.json', value)
/** Mistake I doing is when I modify some value it has to be stored in varible to access it before I'm not doing it
 * now done
 */
const newValue = JSON.stringify(value)
fs.writeFileSync('jsonData.json', newValue)


console.log(newValue)