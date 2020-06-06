const yargs = require('yargs')
const note = require('./getNotes.js')


/** To get the input from command line */
/** process.argv is an array if we want to access the output and input we can get it by array indexing 
 * node app.js vishnu - first index element will give the location of where node has installed 
 * app.js - file location and vishnu argv[2] will get the name of the input
 * it will always start with the index-2 for accessing the input from command line
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

/**
 *  Running this command in terminal 
 * node app.js add --title=visnu --body="creating a journal"
{
  _: [ 'add' ],
  title: 'visnu',
  body: 'creating a journal',
  '$0': 'app.js'
}
Adding a new note
Title : visnu
Body : creating a journal
 */

/** New Note */
yargs.command({
    /** This command helps to identify in terminal which one to call and execute */
    command: 'add',
    description: 'Adding a new note',
    /** Builder where we can create the objects and pass as arguments to get the input from command line */
    builder: {
        title: {
            describe: "Title one",
            /** It is like required, true this object should be there, false no needed */
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "write your notes",
            demandOption: true,
            type: 'string'

        }
    },
    /**hanlder is a function call */
    handler: (argv) => {
        console.log('Adding a new note')
        /** argv.title throwed an error, after changing it into yargs.argv.title it is working
         * we are using yargs libary to get that we must call the argv from yargs or else it is throwing argv is not defined
         */
        console.log("Title : " + yargs.argv.title)
        console.log("Body : " + yargs.argv.body)

        /** from getNotes.js we are calling the function to return getNotes and addNote */
        note.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'removing a note',
    builder: {
        title: {
            describe: "Removing the note from list",
            // demandOption: true
            /** required is working fine as demandOption */
            required: true,
            /** type is not working for me 
             * it is working fine when I pass the parameter, but it is not throwing error while passing the node command
             * while printing if the type is number, if i pass string the output is NaN
             */
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Note has been removed from hanlder function : ' + argv.title)
        note.removeNote(argv.title)

    }
}).argv;

yargs.command({
    command: 'list',
    description: 'List down all the notes',
    handler: () => {
        console.log('List')
    }
})

yargs.command({
    command: 'read',
    description: 'Reading the notes',
    handler: () => {
        console.log('Reading')
    }
}).parse()

/** callback function maybe...? IDK this function will parse our code and run in terminal or else there will be no call
 * to the functions which we created and output will be printed in terminal
 */
yargs.parse()

// console.log(yargs.argv)