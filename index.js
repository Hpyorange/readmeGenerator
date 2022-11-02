// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:`input`,
        name:`title`,
        message:`😀 Please enter the title of the project:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter a title for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`description`,
        message:`😀 Please enter the description of the project:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter some description for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`installation`,
        message:`How to install the project❓`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter installation info for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`usage`,
        message:`How to use the project❓`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter usage info for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`contribution`,
        message:`😀 Please Enter contribution guidelines of the project:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter contribution guidelines for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`test`,
        message:`😀 Please Enter test instructions of the project:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter test instructions for your project');
                return false;
            }
        }
    },

    {
        type:`rawlist`,
        name:`license`,
        message:`😀 Please choose a license for the project:`,
        choices:['MIT',`GPLv3`,'Apache_2.0','None'],
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please choose a license for your project');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`userName`,
        message:`😀 Please enter your github username:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter your github username');
                return false;
            }
        }
    },

    {
        type:`input`,
        name:`email`,
        message:`😀 Please enter your email address:`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter your email address');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! The information is converted to README')
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("READMEDemo.md", generateMD(userInput))
    })
    .catch((err)=> console.log(err))
};

// Function call to initialize app
init();
