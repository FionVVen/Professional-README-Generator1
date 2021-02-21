// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("renderLicenseBadge", license);
	if(license !== 'None') {
		return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  >## Description
 ${data.description}
## Table of contents
* [Description](#Description)
* [Installation Instructions](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [Contributing](#Contributing)
* [Test Instructions](#Test-Instructions)
* [License](#License)
* [Questions](#Questions)
## Installation Instructions
${data.instructions}
## Usage Information
${data.usage}
## Contributing
${data.guideline}
## Test Instructions
${data.test}
## License
* [License](#${data.license})
This Project is licensed under ${data.license}
## Questions
### For further enquiries you can contact me via:
* GitHub username: ${data.Guthub}
* [Github Link](https://github.com/${data.githubUsername}/)
* Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
