// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

const writeFileAsync = util.promisify(fs.writeFile);


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//Input prompt

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'tip',
        message: 'Please press enter if you need to skip any section',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide description of your project.',
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'Please provide installation instructions of your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
      },
      {
        type: 'input',
        name: 'guildline',
        message: 'Please provide contribution guildlines if you would like other developers to contribute to your project.',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license of your project.',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Please enter your Githun Username.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail address.',
      }
    ]);
};

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./sample/README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to readme.md'))
      .catch((err) => console.error(err));
  };


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
