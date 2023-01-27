// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const { create } = require('domain');



// TODO: Create an array of questions for user input
// const questions = [
//   'Enter the description.',
//   'What are the installation instructions:',
//   'Enter usage information for the application',
//   'Who contributed to this project?',
//   'What are the test instructions',
// ];

inquirer
.prompt ([ 
//   {
//   type: 'input',
//   name: 'title',
//   message: 'What is the title of your README?',
// },
{
  type: 'input',
  name: 'description',
  message: 'Enter the description of the application.',
},
{
  type: 'input',
  name: 'installation',
  message: 'What are the installation instructions?',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage information for the application',
},
{
  type: 'input',
  name: 'contribution',
  message: 'Who contributed to this project?',
},
{
  type: 'input',
  name: 'test',
  message: 'What are the test instructions?',
},
])

// TODO: Create a function to write README file


.then((content) => {

readmeContent = generateMarkdown(content)

fs.writeToFile(README2.md, readmeContent, (err) => {
  if (err)
  console.log(err)
  else {
    console.log("Files written successfully")
  }
})
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


 