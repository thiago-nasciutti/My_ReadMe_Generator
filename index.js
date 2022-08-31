// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your Project Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for use.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: [
      "Apache 2.0",
      "Boost 1.0",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "No license",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for your application",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your github user name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync("./dist/README.md", generateMarkdown(answers), (error) => {
      console.log(error);
    });
  });
}

// Function call to initialize app
init();
