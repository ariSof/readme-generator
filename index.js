//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = ["What is the Project's Title?", 
 "Project Description:", "Installation Instructions:",
 "Usage Information:", "Contribution guidelines:", "Test instructions:",
  "Choose a license:", "Enter GitHub username:", "Enter your email:"
];

// Function to write README file
function writeToFile(fileName, data) {
    const info = generator(data);
    fs.writeFile(fileName, info , (err) =>
        err ? console.error(err) : console.log('Success!')
        );
}

// Function to initialize app
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
            default: 'node index.js'
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
            choices: ["MIT", "ISC", "GPLv3", "None"],
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
        
        writeToFile('sampleReadMe.md', response);
    });
}

// Function call to initialize app
init();
