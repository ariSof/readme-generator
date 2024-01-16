// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the Project's Title?", "Project Description:", "Installation Instructions:",
"Usage Information:", "Contribution guidelines:", "Test instructions:",
 "Choose a license:", "Enter GitHub username:", "Enter your email:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
        {
        type: 'input',
        message: questions[0],
        name: 'title',
        },
        {
            type: 'input',
        message: questions[1],
        name: 'description',
        },
        {
            type: 'input',
        message: questions[2],
        name: 'instructions',
        },
        {
            type: 'input',
        message: questions[3],
        name: 'usage',
        },
        {
            type: 'input',
        message: questions[4],
        name: 'contribution',
        },
        {
            type: 'input',
        message: questions[5],
        name: 'test',
        },
        {
            type: 'checkbox',
        message: questions[6],
        name: 'license',
        choices: ["MIT", "ISC", "N/A"],
        },
        {
            type: 'input',
        message: questions[7],
        name: 'github',
        },
        {
            type: 'input',
        message: questions[8],
        name: 'email',
        },
    ])
    .then((response) => {
        writeToFile('sampleReadMe.md', JSON.stringify(response));
    });
}

// Function call to initialize app
init();
