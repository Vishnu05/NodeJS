//import mod from './getNotes.js'

const firstname = require('../Examples/ExportTheFunctions/utils.js');
/** This library is used for validation purpose */
const validator = require('validator')
/** Printing cool stuff on command line with chalk  */
const color = require('chalk')

const error = color.bold.red

console.log(error('you have made a serious mess in the code'))
console.log(color.green.inverse.bold('this is inverse!!!'))
console.log(color.green('Success !!!'))

console.log(color.blue('Hello world'))

//console.log(mod)
console.log('hi hello how are you')

const notes = require('./getNotes.js')

const sum = firstname(3, 7)

console.log(sum)

console.log(notes('Vishnu welcome to the nodejs world'))

let mail = 'npm#npm.com'

console.log(validator.isEmail(mail))
console.log(validator.isURL('http://google.com'))

