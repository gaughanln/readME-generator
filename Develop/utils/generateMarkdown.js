
// RENDER LICENSE BADGE: THIS INCLUDES THE BADGE, LINK, AND DESCRIPTION
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


// RENDERING THE LICENSE WEBSITE LINK
function renderLicenseLink(license) {
  if (license !== 'none') {
    return license 
    } 
    else ""
  }


  // TEMPLATE LITERAL FOR README
// the table of contents is not linking???
const generateMarkdown = (data) => { 
  const badgeArray = renderLicenseBadge(data.license) 
  // deconstructing the badge to pull the following
  const [badge, link, description] = badgeArray
  return `

  ${badge}

  # ${data.title}

  ## Description 
  ${data.description} 

  #### Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions?)
  - [License](#license)

  ## Installation 
  ${data.installation} 

  ## Usage 
  ${data.usage} 

  ## Contributing 
  ${data.contributing} 

  ## Tests 
  ${data.test} 

  ## Questions?
  If you need to contact me for any additional questions, I can be reached via
  * Github: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email}
  * 
  ## License
  ${description}
  ${renderLicenseLink(link)}
  `
}

 
module.exports = generateMarkdown;


