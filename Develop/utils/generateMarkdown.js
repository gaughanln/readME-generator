
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - NEED A SWITCH CASE FOR THIS. 

// this initially read function renderLicenseBadge(license){} - but I changed it to an arrow function for practice. is that ok?
// a badge for that license is added near the top of the README
renderLicenseBadge = (license) => {
  switch(license) {
    case 'MIT':
      return ['![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', 
      '[Click here to view more about the license](https://opensource.org/licenses/MIT)', 
      'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'];
      break;
      case 'Apache 2.0':
      return ['![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)', 
      '[Click here to view more about the license](https://opensource.org/licenses/Apache-2.0)', 
      'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'] ;
      break;
      case 'GNU General Public 3.0':
      return ['![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)', 
      '[Click here to view more about the license](https://www.gnu.org/licenses/gpl-3.0)', 
      'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'];
      break;
      default:
       return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// a notice is added to the section of the README entitled License that explains which license the application is covered under
// get info on license from github - createfile and search license
// function renderLicenseSection(license) {
//   if(license !== 'none') {
//     return `\n* [License](##license)\n`;
//    }
//    return "";
// }

// TODO: Create a function to generate markdown for README
// generated with the title of my project and...


// template literal for readme - NEEDS HELP
function renderLicenseLink(license) {
  if (license !== 'none') {
    return license 
    } 
    else ""
  }

const generateMarkdown = (data) => { 
  const badgeArray = renderLicenseBadge(data.license) 
  console.log(badgeArray)
  const [badge, link, description] = badgeArray
  return `
  ${badge}
  # ${data.title}
  ## Description 
  ${data.description} 
  ## Table of contents
  ## Installation 
  ${data.installation} 
  ## Usage 
  ${data.usage} 
  ## Contributing 
  ${data.contributing} 
  ## Tests 
  ${data.test} 
  ## Questions
  If you need to contact me for any additional questions, I can be reached via
  * Github username: ${data.github} + link
  * email: ${data.email}
  ## License
  ${description}
  ${renderLicenseLink(link)}
  `
}

  
 //destructuring the array


 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
 




module.exports = generateMarkdown;


