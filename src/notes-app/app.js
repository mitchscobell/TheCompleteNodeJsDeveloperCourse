const fs = require('fs');

//s.writeFileSync('notes.txt', 'This file was created by Node.js!');

fs.appendFileSync('notes.txt', '\nThis file was appended to by Node.js!');

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text
