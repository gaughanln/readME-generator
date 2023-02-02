// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
// linking to generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "license",
    message:
      "Select the license for your application: MIT, Apache 2.0, or GNU General Public 3.0",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your application",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of the application.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for the application",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address",
  },
];

// // TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    // TODO: Create a function to write README file
    .then((content) => {
      let readmeContent = generateMarkdown(content);

      fs.writeFile('./README.md', readmeContent, (err) => {
        if (err) console.log(err);
        else {
          console.log("Files written successfully");
        }
      });
    });
}

// // Function call to initialize app
init();
