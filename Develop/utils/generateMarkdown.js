// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - NEED A SWITCH CASE FOR THIS. 

// this initially read function renderLicenseBadge(license){} - but I changed it to an arrow function for practice. is that ok?
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
// I INCLUDED THIS IN THE FUNCTION ABOVE - IS THIS OK? DO I NEED 2 FUNCTIONS?
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
      break;
      case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
      break;
      case 'GNU General Public 3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
      default:
       return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// template literal for readme 
const generateMarkdown = ({data}) => `
# ${data.title} 
## Description 
${data.description} 
### Installation 
${data.installation}
### Usage 
${data.usage}
### Contributing 
${data.contributing}
### Tests 
${data.tests}`
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
