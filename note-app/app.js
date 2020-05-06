const yargs = require('yargs')


/** To get the input from command line */
/** process.argv is an array if we want to access the out put an input we can get it by array indexing 
 * node app.js vishnu - first one will give the location of where node has installed 
 * app.js - file location and vishnu argv[2] will get the name of the input
 */

//console.log(process.argv)

/* const input = process.argv

if (input[2] === 'add') {
    console.log('Enter your notes adding operation entered: ')
} else if (input[2] === 'edit') {
    console.dir('Your notes being edited')
} */

// console.log(yargs)
console.log(yargs.argv)

/** Note application */

yargs.version('1.4.6')

/** New Note */
yargs.command({
    command: 'add',
    description: 'Adding a new note',
  /**hanlder is a function call */
    handler: () => {
        console.log('Adding a new note')
    }
}).argv;

yargs.command({
    command: 'remove',
    description: 'removing the note',
    handler: () => {
        console.log('Note has been removed')
    }
}).argv;

yargs.command({
    command: 'list',
    description: 'List down all the notes',
    handler: () => {
        console.log('List')
    }
}).argv;

yargs.command({
    command: 'read',
    description: 'Reading the notes',
    handler: () => {
        console.log('Reading')
    }
})