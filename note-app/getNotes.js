
const fs = require('fs')
const chalk = require('chalk')

/** Return all notes */
const getNotes = (a) => {

    const notes = loadNotes()
    console.log(chalk.red.inverse('Your notes'))
    console.log("hiihi")

    /** does the forEach runs throughout the function ? or only piece of code runs not sure */
    notes.forEach((value) => {
        console.log(value)
    })
    // console.log(chalk.green(notes))
}

// module.exports = notes

// let modu = () => {  return 'export and import modules are working fine' }
// export default notes

debugger
/** To add a new notes */
const addNote = function (title, body) {

    /** Function call to loadnotes and this will return all the data of notes.json*/
    const notes = loadNotes()
    console.log(notes)

    /** filter will check all the notes and return a boolean value, if there is an note present or not */
    //const duplicateNote = notes.filter((note) => note.title === title)

    /** filter has problem where it will go and iterate the whole array from each value by value
     * but find is better when it comes it will search the array when it finds the element it will stop and rest of the 
     * array will not be searched, this reduce the time complexity and space complexity and much more effienct
     */
    const duplicateNotes = notes.find((value) => {
        // console.log(value)
        console.log(value.titleOfNote)
        // console.log(title)
        return value.titleOfNote === title
    })

    /** if duplicateNote returns a true statement it will go to else, if no new note title matches
     * new note wil be created
     */
    if (!duplicateNotes) {
        notes.push({
            titleOfNote: title,
            bodyOfNote: body
        })
        saveNote(notes)
        console.log(chalk.green.inverse('Note added successfully'))
    } else {
        console.log(chalk.red.inverse('Title has been taken, Try something different'))
    }
}


/** By giving as object is gives more flexiablity to call more functions with this export  */


/** Removing a note with title */

const removeNote = (title) => {

    const notes = loadNotes()

    const removeSpecificNote = notes.filter((value) => {
        console.log("checking the logic: " + notes.title)
        console.log(value.titleOfNote)
        console.log(value.titleOfNote !== title)
        return value.titleOfNote !== title
    })

    if (notes.length !== removeSpecificNote.length) {
        console.log(chalk.green.inverse('Notes have been removed'))
        saveNote(removeSpecificNote)
    } else {
        console.log(chalk.red.inverse('No matching notes'))
    }

    // console.log(removeSpecificNote)
    // console.log('The note with the title has been removed successfully: ' + title)

}

/** reading a note */
const readNote = (title) => {

    const notes = loadNotes()

    /** findingNote will contains the value of object if we want to extrach the inner object values it can 
     * accessed by findingNote.titleOfNote and findingNote.bodyOfNote
     */
    const findingNote = notes.find((value) => {
        return value.titleOfNote === title
    })
    console.log(findingNote)
    if (findingNote) {
        console.log(chalk.green.inverse('Note have been found'))
        console.log(chalk.inverse(findingNote.titleOfNote))
        console.log(findingNote.bodyOfNote)
    } else {
        console.log(chalk.red.inverse('No notes found on this title'))
    }

}

/** saving the noes */
const saveNote = (notess) => {
    const dataJson = JSON.stringify(notess)
    fs.writeFileSync('notes.json', dataJson)
}

/** loading the notes from file system
 * Code reusability many operations can now call this function to load the data
 */
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}


/** exporting the function so that other js files can be used */
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}