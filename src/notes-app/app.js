const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail('mitch@scobellis.com'));
console.log(validator.isURL('https://scobellis.com'));

console.log(chalk.green.bold('Success!'));