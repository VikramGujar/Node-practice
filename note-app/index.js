import getNotes from './notes.js';
import validator from 'validator';
import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

getNotes();

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Title of note',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
      console.log('Adding a note');
      console.log('Title :'+ argv.title);
      console.log('Body: '+ argv.body);

    }
})
  .command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe:'Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
      console.log('Removing a new note');
      console.log('Title :', argv.title);
      console.log('Body: '+ argv.body);
    }
  })
  .command({
    command: 'read',
    describe: 'read a new note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
      console.log('Reading a new note');
      console.log('Title: '+ argv.title);
      console.log('Body: '+ argv.body);
    }
  })
  .command({
    command: 'list',
    describe: 'give list of notes',
    builder:{
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
      console.log('List of notes');
      console.log('Title: '+ argv.title);
      console.log('Body: '+ argv.body);
    }
  })
  .parse();




  
// console.log(chalk.bgGreen.inverse.bold('Success!'));
// console.log(chalk.bgRed('Error'));
// console.log(validator.isEmail('vikram123@gmail.com'));
// console.log(validator.isURL('https://www.google.com'));




// const fs = require('fs');
// require('./utils')

// const name = "Vikram";

// console.log(`Hii i am ${name}`);