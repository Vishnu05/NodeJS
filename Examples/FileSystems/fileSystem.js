
/** To load the module of nodejs we need require to import that libary i guess 
 * if there is no require the node will throw error like there is no function called fs best practise is always following naming convention
 */
const fs = require('fs')

/** this helps to create a file and it will write the content to file */
fs.writeFileSync('note.txt', 'this file was created by node.js')
fs.writeFileSync('note.txt', 'second argument this is override the statement of first one')
fs.readFileSync('note.txt')

/** It will append to the existing file if it have or else it will create a new file */
fs.appendFileSync('note.txt', '\n wow I hope this will be appending the first text')