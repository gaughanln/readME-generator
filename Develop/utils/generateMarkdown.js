const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - NEED A SWITCH CASE FOR THIS. 

// this initially read function renderLicenseBadge(license){} - but I changed it to an arrow function for practice. is that ok?
// a badge for that license is added near the top of the README
renderLicenseBadge = (license) => {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
      case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
      case 'GNU General Public 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
      default:
       return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'none') {
  // reeturn link {
  //   else {
  //     return "";
  //   }
  // } 
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseSection(license) {
  if(license !== 'none') {
    return `\n* [License](####license)\n`;
   }
   return "";
}

// TODO: Create a function to generate markdown for README
// generated with the title of my project and...
// SECTIONS:
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// template literal for readme - NEEDS HELP
const generateMarkdown = ({data}) => `
#${data.title}
## Description 
${data.description} 
## Table of contents
### Installation 
${data.installation} 
## Usage 
${data.usage} 
### Contributing 
${data.contributing} 
### Tests 
${data.tests} 
### Questions
If you need to contact me for any additional questions, I can be reached via
* Github username: ${github} + link
* email: 
####License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}`  //this part came from askBCS as how to link it ?



module.exports.generateMarkdown = generateMarkdown;

