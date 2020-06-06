
const fs = require('fs')

/** Return all notes */
const getNotes = (a) => {
    return a
}

// module.exports = notes

// let modu = () => {  return 'export and import modules are working fine' }
// export default notes

/** To add a new notes */
const addNote = function (title, body) {

    /** Function call to loadnotes and this will return all the data of notes.json*/
    const notes = loadNotes()
    console.log(notes)

    /** filter will check all the notes and return a boolean value, if there is an note present or not */
    const duplicateNote = notes.filter((note) => {
        return note.title === title
    })

    /** if duplicateNote returns a true statement it will go to else, if no new note title matches
     * new note wil be created
     */
    if (duplicateNote.length === 0) {
        notes.push({
            titleOfNote: title,
            bodyOfNote: body
        })
        //console.warn(notes)
        saveNote(notes)
    } else {
        console.log('Title has been taken, Try something different')
    }
}

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

/** By giving as object is gives more flexiablity to call more functions with this export  */


/** Removing a note with title */

const removeNote = (title) => {

    const notes = loadNotes()
    console.log(notes.splice(title))
    console.log(notes)
    console.log('The note with the title has been removed successfully: ' + title)

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}