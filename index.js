// TODO: Include packages needed for this application
const fs = require('fs');
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
        message:`😀 Please Enter contribution guidelines of the project`,
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
        message:`😀 Please Enter test instructions of the project`,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('(Request information😳) Please enter test instructions for your project');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! The information is converted to ReadMe')
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput))
    })
    .catch((err)=> console.log(err))
};

// Function call to initialize app
init();
